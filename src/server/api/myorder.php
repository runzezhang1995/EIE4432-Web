<?php
	error_reporting(0);
	$Userid = $_POST["user_id"];
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
	$Oid = array();
	$Odate = array();
	$Operiod = array();
	$Oname = array();
	$Ophone = array();
	$Ostatus = array();
	$Oreason = array();
	$Otime = array();
	$OnumberofPeople = array();
	$num=0;
	
	$query1 = "select * from `order`,restaurant where restaurant.Rid = `order`.Rid AND Uid = ".$Userid;
	$result1 = $conn->query($query1);	
	if (!$result1) die("No information");
	$result1->data_seek(0);
	while ($row=$result1->fetch_assoc()) 
	{
		$Rid[] = $row["Rid"];
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
		$Oid[] = $row["Oid"];
		$Odate[] = $row["Odate"];
		$Operiod[] = $row["Operiod"];
		$Oname[] = $row["Oname"];
		$Ophone[] = $row["Ophone"];
		$Ostatus[] = $row["Ostatus"];
		$Otime[] = $row["Otime"];
		$OnumberofPeople[] = $row["OnumberofPeople"];
		$Oreason[] = $row["Oreason"];
		$num++;
	}
	
	$result1->free();
	$conn->close();
	
	$order = array();
	for($i=0;$i<$num;$i++)
	{
		$order = array('order_id' => $Oid[$i],
						'Orderdate' => $Odate[$i],
						'Orderperiods' => $Operiod[$i],
						'Ordername' => $Oname[$i],
						'Orderphone' => $Ophone[$i],
						'Orderstatus' => $Ostatus[$i],
						'Ordertime' => $Otime[$i],
						'Ordernumber' => $OnumberofPeople[$i],
						'Cancelreason'=> $Oreason[$i],
						'restaurant_id' => $Rid[$i],
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
		$orders[] = $order;
	}
	
	$result['orders'] =$orders;
	$result_json = json_encode($result);
	echo $result_json;
	exit;
?>