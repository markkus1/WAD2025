document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    let errors = [];

    if (password.length < 8 || password.length >= 15)
        errors.push("The password should be of a specific length (at least 8 characters and less than 15 characters)");

    if (!/^[A-Z]/.test(password))
        errors.push("It should start with an uppercase alphabet");

    if (!/[A-Z]/.test(password))
        errors.push("Includes at least one uppercase alphabet character");

    let lowercase = password.match(/[a-z]/g);
    if (!lowercase || lowercase.length < 2)
        errors.push("Includes at least two lowercase alphabet characters");

    if (!/[0-9]/.test(password))
        errors.push("Includes at least one numeric value");

    if (!password.includes("_"))
        errors.push("It should include the character “_”");

    const errorText = document.getElementById("passwordError");

    if (errors.length > 0) {
        errorText.textContent = "The password is not valid – " + errors.join(". ");
        return;
    }

    errorText.style.color = "green";
    errorText.textContent = "";
    window.location.href = "index.html";
});
