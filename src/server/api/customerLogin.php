<?php
	error_reporting(0);

// fot customer to login
//require('SQL_Connect.php');//another db connector, connect to the res DB
       // get input username and pw
	  $conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode($result);
		echo $result_json;
		exit;
	}
        $user_name =$_POST['username']; 
        $user_pw =$_POST['password']; 
		//$user_name ="LI Jiayu"; //this refer to that in API+list
        //$user_pw ="123456"; 
		
		$result = array('success'=>true);
	  
		$query1="SELECT * FROM user WHERE Username= '".$user_name."' AND Password='".$user_pw."'";
		$result1 = $conn->query($query1);
		
		// if (!$result1) die("Name or pw incorrect, please re-enter");
		$result1->data_seek(0);
		
		while($row=$result1->fetch_assoc())
		{
		//if can select out the row, should dulipcated
		//$result['success']=false;
		//$error="The restaurant name already exist,please change name";
			//echo json_encode($result);
			//exit;
			$n=$row["Uid"];	
			$result['success']=true;
			$result['uid']=$n;
			echo json_encode($result);
			exit;
		}
		$result['success']=false;
		$result['error']='Incorrect username or password, please re-enter';

		echo json_encode($result);
				
		
			
?>
