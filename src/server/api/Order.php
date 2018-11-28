<?php
	error_reporting(0);
	$Userid = $_POST["user_id"];
	$Restaurantid = $_POST["restaurant_id"];
	$Odate = $_POST["orderdate"];
	$Operiod = $_POST["orderperiod"];
	$Oname = $_POST["ordername"];
	$Ophone = $_POST["Ophone"];
	$Ostatus = "Waiting";
	$Oreason = null;
	$Otime = $_POST["ordertime"];
	$OnumberofPeople = $_POST["numberofpeople"];
	$result = array('success'=>true);
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	$query1 = "INSERT INTO `order`(`Uid`, `Rid`, `Odate`, `Operiod`, 
				`Oname`, `Ophone`, `Ostatus`, `Oreason`, `Otime`, `OnumberofPeople`)
				VALUES('".$Userid."','".$Restaurantid."','".$Odate."','".$Operiod."','".$Oname."','".$Ophone.
				"','waiting','".$Oreason."','".$Otime."','".$OnumberofPeople."')";

	
	echo $query1;
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