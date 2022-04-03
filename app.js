const form = document.getElementById("registerationForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(document.getElementById("registerationForm"));

  const data = fetchUtils(
    "https://takesomerest.herokuapp.com/api/users/register",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.get("first_name"),
        lastName: formData.get("last_name"),
        email: formData.get("email"),
        password: formData.get("password"),
        phoneNumber: formData.get("phone"),
        country: parseInt(formData.get("country")),
        businessName: formData.get("business_name"),
      }),
    }
  ).then((data) => {
    console.log(data);
  });
});

const fetchUtils = async (url = "", options) => {
  const data = await fetch(url, options);
  const response = await data.json();
  return response;
};
