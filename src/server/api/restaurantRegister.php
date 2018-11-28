<?php
	error_reporting(0);
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
    
	//require('SQL_Connect.php');//connect to db
    // get input user and pw
    $user_name =$_POST['username']; 
    $user_pw =$_POST['password']; 
	$result = array('success'=>true);
	//$user_name ="McDonalds_HungHom"; 
    //$user_pw ="123456"; 
	  
	$query1="SELECT * FROM restaurant WHERE Rusername= '".$user_name."'";
	$result1 = $conn->query($query1);
	if (!$result1)die("No information");	
	$result1->data_seek(0);
		while($row=$result1->fetch_assoc())
		{
		//if can select out the row, should dulipcated
		//$result['success']=false;
		//$error="The restaurant name already exist,please change name";
			//echo json_encode($result);
			//exit;
			$a=$row["Rusername"];	
		}
		
		if($a)
		{
			$error="The user name already exist, please change register name";
			echo json_encode(array('success'=>'false',
			'error'=> $error)); 
			exit;
		}
		else
		{
			$query2 = "INSERT INTO restaurant VALUES(NULL,\"".$user_name."\",\"".$user_pw."\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)";
			if ($conn->query($query2) === TRUE)
			{
				// echo "New record created succesfully";
				$result_json = json_encode($result);
				echo $result_json;
				exit;
			}
			else
			{
				$result['success'] = false;
				// echo "Error: " . $squery1 . "<br>" . $conn->error;
				$result_json = json_encode(!$result);
				echo $result_json;
				exit;
			}
		}
	
	
			$conn->close();
		//if no duplicate,register succcess,just enter restaurant username and pw
		//else {
		//$sql = mysql_query("INSERT INTO Restaurant VALUES('$user_name','$user_pw',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)");
		//$result['success']=true;
		//echo json_encode($result);	
		
?>