<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
    <script src="validation.js" defer></script>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm" action="/user/login" method="POST" onsubmit="return validateLoginForm()">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <button type="submit">Login</button>
        <p id="error" style="color:red;"></p>
    </form>
</body>
</html>
