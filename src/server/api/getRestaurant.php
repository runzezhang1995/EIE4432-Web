<?php
	error_reporting(0);

	$cuisine = $_POST['cuisine'];
	$keyword = $_POST['keyword'];
	$result = array('success'=>true);
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	
	$Rid = array();
	$Rname = array();
	$Rimage = array();
	$Raddress = array();
	$Rstart = array();
	$Rclose = array();
	$Rsize = array();
	$Rcuisines = array();
	$Averagecost = array();
	$Phone = array();
	$Website = array();
	$num=0;

	
	if($cuisine == "" && $keyword == "")
	{
		$query1 = "select * from restaurant";
		$result1 = $conn->query($query1);
		if (!$result1) die("No information");
		$result1->data_seek(0);
		while ($row=$result1->fetch_assoc()) 
		{
			$Rid[] =$row["Rid"];
			$Rname[] = $row["Rname"];
			$Rimage[] = $row["Rimage"];
			$RAddress[] = $row["RAddress"];
			$Rstart[] = $row["Rstart"];
			$Rclose[] = $row["Rclose"];
			$Rsize[] = $row["Rsize"];
			$Rcuisines[] = $row["Rcuisines"];
			$Averagecost[] = $row["Average-cost"];
			$Phone[] = $row["Phone"];
			$Website[] = $row["Website"];
			$num++;
		}
		$result1->free();
		$conn->close();
	
		$restaurant = array();
		for($i=0;$i<$num;$i++)
		{
			$restaurant = array('restaurant_id' => $Rid[$i],
								'restaurant' => $Rname[$i],
								'thumbnail_image' => $Rimage[$i],
								'address' => $RAddress[$i],
								'start' => $Rstart[$i],
								'close' => $Rclose[$i],
								'size' => $Rsize[$i],
								'cuisines' => $Rcuisines[$i],
								'average_cost' => $Averagecost[$i],
								'phone' => $Phone[$i],
								'website' => $Website[$i]);
			$restaurants[] = $restaurant;
		}
	
		$result['restaurants'] =$restaurants;
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	if($cuisine && !$keyword )
	{
		$query2 = "select * from restaurant where Rcuisines = '".$cuisine."'";
		$result2 = $conn->query($query2);
		if (!$result2) die("No information");
		$result2->data_seek(0);
		while ($row=$result2->fetch_assoc()) 
		{
			$Rid[] =$row["Rid"];
			$Rname[] = $row["Rname"];
			$Rimage[] = $row["Rimage"];
			$RAddress[] = $row["RAddress"];
			$Rstart[] = $row["Rstart"];
			$Rclose[] = $row["Rclose"];
			$Rsize[] = $row["Rsize"];
			$Rcuisines[] = $row["Rcuisines"];
			$Averagecost[] = $row["Average-cost"];
			$Phone[] = $row["Phone"];
			$Website[] = $row["Website"];
			$num++;
		}
	
		$result2->free();
		$conn->close();
	
		$restaurant = array();
		for($i=0;$i<$num;$i++)
		{
			$restaurant = array('restaurant_id' => $Rid[$i],
								'restaurant' => $Rname[$i],
								'thumbnail_image' => $Rimage[$i],
								'address' => $RAddress[$i],
								'start' => $Rstart[$i],
								'close' => $Rclose[$i],
								'size' => $Rsize[$i],
								'cuisines' => $Rcuisines[$i],
								'average_cost' => $Averagecost[$i],
								'phone' => $Phone[$i],
								'website' => $Website[$i]);
			$restaurants[] = $restaurant;
		}
	
		$result['restaurants'] =$restaurants;
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	if($keyword && !$cuisine)
	{
		$query3 = "select * from restaurant where Rname LIKE '%".$keyword."%'";
		$result3 = $conn->query($query3);
		if (!$result3) die("No information");
		$result3->data_seek(0);
		while ($row=$result3->fetch_assoc()) 
		{
			$Rid[] =$row["Rid"];
			$Rname[] = $row["Rname"];
			$Rimage[] = $row["Rimage"];
			$RAddress[] = $row["RAddress"];
			$Rstart[] = $row["Rstart"];
			$Rclose[] = $row["Rclose"];
			$Rsize[] = $row["Rsize"];
			$Rcuisines[] = $row["Rcuisines"];
			$Averagecost[] = $row["Average-cost"];
			$Phone[] = $row["Phone"];
			$Website[] = $row["Website"];
			$num++;
		}
	
		$result3->free();
		$conn->close();
	
		$restaurant = array();
		for($i=0;$i<$num;$i++)
		{
			$restaurant = array('restaurant_id' => $Rid[$i],
								'restaurant' => $Rname[$i],
								'thumbnail_image' => $Rimage[$i],
								'address' => $RAddress[$i],
								'start' => $Rstart[$i],
								'close' => $Rclose[$i],
								'size' => $Rsize[$i],
								'cuisines' => $Rcuisines[$i],
								'average_cost' => $Averagecost[$i],
								'phone' => $Phone[$i],
								'website' => $Website[$i]);
			$restaurants[] = $restaurant;
		}
	
		$result['restaurants'] =$restaurants;
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	if($keyword && $cuisine)
	{
		$query4 = "select * from restaurant where Rname LIKE '%".$keyword."%' AND Rcuisines = '".$cuisine."'";
		$result4 = $conn->query($query4);
		if (!$result4) die("No information");
		$result4->data_seek(0);
		while ($row=$result4->fetch_assoc()) 
		{
			$Rid[] =$row["Rid"];
			$Rname[] = $row["Rname"];
			$Rimage[] = $row["Rimage"];
			$RAddress[] = $row["RAddress"];
			$Rstart[] = $row["Rstart"];
			$Rclose[] = $row["Rclose"];
			$Rsize[] = $row["Rsize"];
			$Rcuisines[] = $row["Rcuisines"];
			$Averagecost[] = $row["Average-cost"];
			$Phone[] = $row["Phone"];
			$Website[] = $row["Website"];
			$num++;
		}
	
		$result4->free();
		$conn->close();
	
		$restaurant = array();
		for($i=0;$i<$num;$i++)
		{
			$restaurant = array('restaurant_id' => $Rid[$i],
								'restaurant' => $Rname[$i],
								'thumbnail_image' => $Rimage[$i],
								'address' => $RAddress[$i],
								'start' => $Rstart[$i],
								'close' => $Rclose[$i],
								'size' => $Rsize[$i],
								'cuisines' => $Rcuisines[$i],
								'average_cost' => $Averagecost[$i],
								'phone' => $Phone[$i],
								'website' => $Website[$i]);
			$restaurants[] = $restaurant;
		}
	
		$result['restaurants'] =$restaurants;
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}

?>