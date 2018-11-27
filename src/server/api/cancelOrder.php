<?php
	$Userid = $_POST["user_id"];
	$Orderid = $_POST["order_id"];
	$result = array('success'=>true);
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		echo "Unable to connect to database";
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	$query1 = "UPDATE `Order` SET `Ostatus`='canceled' where Uid = '".$Userid."' AND Oid = '".$Orderid."'";
	
	if ($conn->query($query1) === TRUE)
	{
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	else
	{
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	
	$conn->close();
	
?>