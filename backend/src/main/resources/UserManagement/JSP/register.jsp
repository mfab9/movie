<!DOCTYPE html>
<html lang="en">
<head>
    <title>Register</title>
    <script src="validation.js" defer></script>
</head>
<body>
    <h2>Register</h2>
    <form id="registerForm" action="/user/register" method="POST" onsubmit="return validateRegistrationForm()">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword"><br><br>
        <button type="submit">Register</button>
        <p id="error" style="color:red;"></p>
    </form>
</body>
</html>
