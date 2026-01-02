const signupForm = document.getElementById("signupForm");
const errorMsg = document.getElementById("error");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("/api/v1/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!data.success) {
      errorMsg.textContent = data.result?.error.en || "Signup failed";
      return;
    }
    window.location.href = "/chat";
  } catch (err) {
    console.error(err);
    errorMsg.textContent = "Something went wrong";
  }
});
