function check() {
  var userName = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${userName}`,
      password: `${password}`,
    }),
  })
    .then((res) => res.json())
    .then((login) => {
      console.log(login);
      if (login.message == "Invalid credentials") {
        alert("invalid input");
      } else {
        sessionStorage.setItem("token", "true");
        localStorage.setItem("firstName", login.firstName);
        localStorage.setItem("lastName", login.lastName);
        localStorage.setItem("image", login.image);
        localStorage.setItem("token", login.token);
        localStorage.setItem("email", login.email);
        window.location.href = "../pages/shop.html";
      }
    });
}

// atuny0@sohu.com
// 9uQFF1Lh
