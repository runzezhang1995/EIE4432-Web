<?php
	error_reporting(0);
	$Restaurantid = $_POST["restaurant_id"];
	$Rname = $_POST["restaurantname"];
	$Rimage = $_POST["restaurantimage"];
	$RAddress = $_POST["restaurantaddress"];
	$Rstart = $_POST["restaurantstart"];
	$Rclose = $_POST["restaurantclose"];
	$Rsize = $_POST["restaurantsize"];
	$Rcuisines = $_POST["restaurantcuisines"];
	$Averagecost = $_POST["restaurantcost"];
	$Phone = $_POST["restaurantphone"];
	$Website = $_POST["restaurantwebsite"];
	$result = array('success'=>true);
	
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	$query1 = "UPDATE `restaurant` SET `Rname`='".$Rname."',`Rimage`='".$Rimage."',`RAddress`='".$RAddress."',
	`Rstart`='".$Rstart."',`Rclose`='".$Rclose."',`Rsize`='".$Rsize."',`Rcuisines`='".$Rcuisines."',`Average-cost`='".$Averagecost."',
	`Phone`='".$Phone."',`Website`='".$Website."'WHERE Rid = ".$Restaurantid;
	
	if ($conn->query($query1) === TRUE)
	{
		echo "New record created succesfully";
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	else
	{
		echo "Error: " . $query1 . "<br>" . $conn->error;
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	
	$conn->close();
	
	
?>