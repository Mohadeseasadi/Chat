const openSearch = document.getElementById("openSearch");
const searchModal = document.getElementById("searchModal");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

openSearch.addEventListener("click", () => {
  searchModal.classList.add("show");
  setTimeout(() => searchInput.focus(), 50);
});

closeSearch.addEventListener("click", closeModal);
searchModal.addEventListener("click", (e) => {
  if (e.target === searchModal) closeModal();
});

function closeModal() {
  searchModal.classList.remove("show");
  searchInput.value = "";
  searchResults.innerHTML = "";
}

searchInput.addEventListener("input", async (e) => {
  const query = e.target.value.trim();
  const emptyText = document.getElementById("searchEmpty");

  searchResults.innerHTML = "";
  emptyText.textContent = "";

  if (!query) return;

  try {
    const res = await fetch(`/api/v1/user/search?username=${query}`);

    if (!res.ok) {
      const err = await res.json();
      emptyText.textContent = err.result?.error.en || "User not found";
      return;
    }

    const data = await res.json();

    if (!data.result || data.result.length === 0) {
      emptyText.textContent = "User not found";
      return;
    }

    data.result.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${user.avatar || "/images/avatar.png"}">
        <span>${user.username}</span>
      `;
      li.onclick = () => {
        startPrivateChat(user);
        closeModal();
      };
      searchResults.appendChild(li);
    });
  } catch (err) {
    emptyText.textContent = "Something went wrong";
  }
});

function startPrivateChat(user) {
  console.log("chat with:", user.username);
}
