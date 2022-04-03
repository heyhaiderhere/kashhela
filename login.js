const loggedInUser = localStorage.getItem("user");
if (loggedInUser) {
  window.location.href = "index.html";
}

const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(document.getElementById("loginForm"));
  console.log("submit");
  const data = fetchUtils(
    "https://takesomerest.herokuapp.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }
  ).then((data) => {
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "index.html";
  });
});

const fetchUtils = async (url = "", options) => {
  const data = await fetch(url, options);
  const response = await data.json();
  return response;
};
