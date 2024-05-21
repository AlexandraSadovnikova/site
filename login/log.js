document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById("loginForm");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var login = document.getElementById("login");
        var password = document.getElementById("password");

        var loginError = document.getElementById("loginError");
        var passwordError = document.getElementById("passwordError");

        var isValid = true;

        if (login.value === "admin") {
            loginError.textContent = "Логин 'admin' недоступен.";
            isValid = false;
        } else if (!login.checkValidity()) {
            loginError.textContent = "Введите корректный email.";
            isValid = false;
        } else {
            loginError.textContent = "";
        }

        if (password.value === "") {
            passwordError.textContent = "Введите пароль.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        if (isValid) {
            alert("Авторизация успешна!");
            form.reset();
        }
    });
});