<?php
include('db.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $query = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $query);
    if ($row = mysqli_fetch_assoc($result)) {
        // Verify password
        if (password_verify($password, $row['password'])) {
            session_start();
            $_SESSION['username'] = $row['username']; // Store username in session
            echo "Logged in as " . $_SESSION['username']; // Display username
        } else {
            echo "Invalid credentials";
        }
    } else {
        echo "User not found";
    }
}
?>