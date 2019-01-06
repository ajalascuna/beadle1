	
<?php
  define('HOST','localhost');
  define('USER','root');
  define('PASS','usbw');
  define('DB','profiling');
  $con = mysqli_connect(HOST,USER,PASS,DB);
  
  if (!$con){
	 die("Error in connection" . mysqli_connect_error()) ;
  } 


?>
