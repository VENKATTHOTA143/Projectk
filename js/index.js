$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    var userName = $("#username").val();
    var pass = $("#pass").val();

    if (userName !== "" && pass !== "") {
      alert("Login successful!!");
      var status = true;
      localStorage.setItem("login-status", JSON.stringify(status));
      location.assign("./order.html");
    } else {
      alert("Please enter correct Username or Password!!");
    }
  });

  $("#logout-btn").click(function () {
    status = false;
    localStorage.setItem("login-status", JSON.stringify(status));
  });
});
