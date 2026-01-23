const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const emptyText = document.getElementById("searchEmpty");

// اگر بخوای prevent form submit
document
  .getElementById("searchForm")
  .addEventListener("submit", (e) => e.preventDefault());

searchInput.addEventListener("input", async (e) => {
  const query = e.target.value.trim();

  searchResults.innerHTML = "";
  emptyText.textContent = "";

  if (!query) return;

  try {
    const res = await fetch(`/api/v1/user/search?username=${query}`);

    if (!res.ok) {
      const err = await res.json();
      emptyText.textContent = err.result?.error?.en || "User not found";
      return;
    }

    const data = await res.json();

    if (!data.result || data.result.length === 0) {
      emptyText.textContent = "User not found";
      return;
    }

    data.result.forEach((user) => {
      const li = document.createElement("li");
      let avatarSrc = "/images/avatar.png";
      if (user.avatar) {
        avatarSrc = `/api/v1/image/get?id=${user.avatar}&t=${Date.now()}`;
      }
      li.innerHTML = `
        <img src="${avatarSrc}" alt="${user.username}'s avatar">
        <span>${user.username}</span>
      `;
      li.onclick = () => {
        startPrivateChat(user);
      };
      searchResults.appendChild(li);
    });
  } catch (err) {
    emptyText.textContent = "Something went wrong";
  }
});
