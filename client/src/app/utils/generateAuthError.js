export function generateAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD":
            return "Email or password entered incorrectly";
        case "EMAIL_EXISTS":
            return "User with this Email already exists";
        default:
            return "Сheck if the input is correct";
    }
}
