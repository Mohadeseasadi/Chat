const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!data.success) {
      errorMsg.textContent = data.result?.error.en || "Login failed";
      return;
    }

    localStorage.setItem("accessToken", data.result.token);
    window.location.href = "/chat";
  } catch (err) {
    console.error(err);
    errorMsg.textContent = "Something went wrong";
  }
});
