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
	
	//$user_name ="Li Julia"; 
    //$user_pw ="123456"; 
	$result = array('success'=>true);
	  
	$query1="SELECT * FROM user WHERE Username= '".$user_name."'";

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
			$a=$row["Username"];	
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
			$query2 = "INSERT INTO user VALUES(NULL,\"".$user_name."\",\"".$user_pw."\")";
			// echo $query2;
			// exit;

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
?>