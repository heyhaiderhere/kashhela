const loggedIn = localStorage.getItem("user");
if (loggedIn) {
  //   const apple = JSON.parse(loggedIn);
  const list = document.getElementById("headerList");
  const user = document.createElement("li");
  user.classList.add("nav-item");
  user.classList.add("mm-in");
  user.classList.add("px-dropdown");
  user.innerHTML = `<a class='nav-link' href='#'>${
    JSON.parse(loggedIn).firstName
  }</a>
<ul class="px-dropdown-menu mm-dorp-in">
    <li><a href="#" id="logout">LOGOUT</a></li>
</ul>
  `;
  list.append(user);
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  location.reload();
});
