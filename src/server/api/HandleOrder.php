<?php
	$Restaurantid = $_POST["restaurant_id"];
	$Orderid = $_POST["order_id"];
	$status =$_POST["status"];
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
	
	if($status == "accept")
	{
		$query1 = "UPDATE `Order` SET `Ostatus`='accepted' where Rid = '".$Restaurantid."' AND Oid = '".$Orderid."'";
	
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
	}
	else if ($status == "reject")
	{
		$query1 = "UPDATE `Order` SET `Ostatus`='rejected' where Rid = '".$Restaurantid."' AND Oid = '".$Orderid."'";
	
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
	}
?>