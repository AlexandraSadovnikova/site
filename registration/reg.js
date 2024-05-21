document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("registrationModal");
    var span = document.getElementsByClassName("close-button")[0];
    var form = document.getElementById("registrationForm");

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById("name");
        var surname = document.getElementById("surname");
        var patronymic = document.getElementById("patronymic");
        var login = document.getElementById("login");
        var password = document.getElementById("password");
        var passwordRepeat = document.getElementById("password_repeat");
        var rules = document.getElementById("rules");

        var nameError = document.getElementById("nameError");
        var surnameError = document.getElementById("surnameError");
        var patronymicError = document.getElementById("patronymicError");
        var loginError = document.getElementById("loginError");
        var passwordError = document.getElementById("passwordError");
        var passwordRepeatError = document.getElementById("passwordRepeatError");
        var rulesError = document.getElementById("rulesError");

        var isValid = true;

        if (!name.checkValidity()) {
            nameError.textContent = "Имя должно содержать только кириллицу, пробелы и тире.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        if (!surname.checkValidity()) {
            surnameError.textContent = "Фамилия должна содержать только кириллицу, пробелы и тире.";
            isValid = false;
        } else {
            surnameError.textContent = "";
        }

        if (patronymic.value !== "" && !patronymic.checkValidity()) {
            patronymicError.textContent = "Отчество должно содержать только кириллицу, пробелы и тире.";
            isValid = false;
        } else {
            patronymicError.textContent = "";
        }

        if (login.value === "admin") {
            loginError.textContent = "Логин 'admin' недоступен.";
            isValid = false;
        } else if (!login.checkValidity()) {
            loginError.textContent = "Введите корректный email.";
            isValid = false;
        } else {
            loginError.textContent = "";
        }

        if (password.value.length < 6) {
            passwordError.textContent = "Пароль должен содержать не менее 6 символов.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        if (passwordRepeat.value !== password.value) {
            passwordRepeatError.textContent = "Пароли должны совпадать.";
            isValid = false;
        } else {
            passwordRepeatError.textContent = "";
        }

        if (!rules.checked) {
            rulesError.textContent = "Вы должны согласиться с правилами регистрации.";
            isValid = false;
        } else {
            rulesError.textContent = "";
        }

        if (isValid) {
            alert("Регистрация успешна!");
            form.reset();
            modal.style.display = "none";
        }
    });
});
