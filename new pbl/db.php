<?php
$conn = new mysqli("localhost", "root", "", "kivax");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>