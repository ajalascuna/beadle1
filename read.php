<?php

$servername = "localhost";
$susername = "root";
$spassword = "usbw";
$dbname = "profiling";

$conn = mysqli_connect($servername,$susername,$spassword,$dbname);

if ($conn->connect_error)
{
    die("Connection Failed" . $conn->connect_error) ;
} 

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0)
{
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outp);
}else {
    echo json_encode("0 result");
}
$conn->close();

?>