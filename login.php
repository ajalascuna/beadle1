<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
 
  require "dbconnect.php";
  
    $data = file_get_contents("php://input");
    
    if (isset($data)) {
       
        $request = json_decode($data);
        $username = $request->username;
		$password = $request->password;
 
    }
    
	$username = stripslashes($username);
    $password = stripslashes($password);
	  $sql = "SELECT id FROM users WHERE username = '$username' and password = '$password' ";

   // $sql = "SELECT * FROM users";
    $result = mysqli_query($con, $sql);
    if(mysqli_num_rows($result) > 0)
    {
        $outp = array();
        $outp = $result->fetch_all(MYSQLI_ASSOC);
        $response= "Successful";
    }else {
        $response= "Your Login Email or Password is invalid";
    }
      // If result matched $myusername and $mypassword, table row must be 1 row


	echo json_encode($response);
?>


