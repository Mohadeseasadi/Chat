document.addEventListener("DOMContentLoaded", async () => {
  const avatarInput = document.getElementById("avatarInput");
  const avatarPreview = document.getElementById("avatarPreview");
  const profileForm = document.getElementById("profileUpdateForm");
  const updateMessage = document.getElementById("updateMessage");

  const token = localStorage.getItem("accessToken");

  try {
    const res = await fetch("http://localhost:3000/api/v1/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch user data");

    const data = await res.json();
    const user = data.result;

    document.getElementById("firstNameProfile").value = user.firstName || "";
    document.getElementById("lastNameProfile").value = user.lastName || "";
    document.getElementById("age").value = user.age || "";
    document.getElementById("gender").value = user.gender || "";
    document.getElementById("bio").value = user.bio || "";
    avatarPreview.src = user.avatar
      ? `http://localhost:3000/api/v1/image/get?id=${
          user.avatar
        }&t=${new Date().getTime()}`
      : "/images/avatar.png";
  } catch (err) {
    console.error(err);
    updateMessage.textContent = "Could not load user data";
  }

  avatarInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (event) {
      avatarPreview.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  profileForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(profileForm);

    try {
      const res = await fetch("http://localhost:3000/api/v1/user/update", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "PATCH",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.result?.error.en || "Update failed");

      updateMessage.style.color = "#2e1476";
      updateMessage.textContent = "Profile updated successfully!";
    } catch (err) {
      updateMessage.style.color = "#ff5555";
      updateMessage.textContent = err.message;
    }
  });
});
