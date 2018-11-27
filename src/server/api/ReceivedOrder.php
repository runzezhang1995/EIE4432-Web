<?php
	error_reporting(0);
	$Restaurantid = $_POST["restaurant_id"];
	$result = array('success'=>true);
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
	
	$Oid =array();
	$Odate = array();
	$Operiod = array();
	$Oname = array();
	$Ophone = array();
	$Ostatus = array();
	$Oreason = array();
	$Otime = array();
	$OnumberofPeople = array();
	$num=0;
	
	$query1 = "select * from `Order` where Rid = ".$Restaurantid;
	$result1 = $conn->query($query1);	
	if (!$result1) die("No information");
	$result1->data_seek(0);
	while ($row=$result1->fetch_assoc()) 
	{
		$Oid[] = $row["Oid"];
		$Odate[] = $row["Odate"];
		$Operiod[] = $row["Operiod"];
		$Oname[] = $row["Oname"];
		$Ophone[] = $row["Ophone"];
		$Ostatus[] = $row["Ostatus"];
		$Oreason[] = $row["Oreason"];
		$Otime[] = $row["Otime"];
		$OnumberofPeople[] = $row["OnumberofPeople"];
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
						'Cancelreason'=> $Oreason[$i]);
		$orders[] = $order;
	}
	
	$result['orders'] =$orders;
	$result_json = json_encode($result);
	echo $result_json;
	exit;
?>