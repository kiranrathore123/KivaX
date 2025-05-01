<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Check if the email exists
    $query = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $query);

    if ($row = mysqli_fetch_assoc($result)) {
        // Send a reset password email (this is just a basic example, in real scenarios you'd send an email with a link)
        echo "A password reset link has been sent to your email.";
    } else {
        echo "Email not found.";
    }
}
?>

<form method="POST" action="forgot-password.php">
    <h3>Forgot Password</h3>
    <span>Email</span>
    <input type="email" name="email" class="box" placeholder="Enter your email">
    <input type="submit" value="Send Reset Link" class="btn">
</form>