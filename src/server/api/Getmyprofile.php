<?php
	error_reporting(0);
	$Restaurantid = $_POST["restaurant_id"];
	$result = array('success'=>true);
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	$query1 = "select * from Restaurant where Rid = ".$Restaurantid;
	$result1 = $conn->query($query1);
	if (!$result1) die("No information");
	$result1->data_seek(0);
	while ($row=$result1->fetch_assoc()) 
	{
		$Rid = $row["Rid"];
		$Rname = $row["Rname"];
		$Rimage = $row["Rimage"];
		$RAddress = $row["RAddress"];
		$Rstart = $row["Rstart"];
		$Rclose = $row["Rclose"];
		$Rsize = $row["Rsize"];
		$Rcuisines = $row["Rcuisines"];
		$Averagecost = $row["Average-cost"];
		$Phone = $row["Phone"];
		$Website= $row["Website"];
	}
	
	$result1->free();
	$conn->close();
	
	$restaurant = array();
	$restaurant = array('restaurant_id' => $Rid,
						'restaurant' => $Rname,
						'thumbnail_image' => $Rimage,
						'address' => $RAddress,
						'start' => $Rstart,
						'close' => $Rclose,
						'size' => $Rsize,
						'cuisines' => $Rcuisines,
						'average_cost' => $Averagecost,
						'phone' => $Phone,
						'website' => $Website);
	$restaurants[] = $restaurant;
	
	
	$result['restaurants'] =$restaurants;
	$result_json = json_encode($result);
	echo $result_json;
	exit;
	
	
?>