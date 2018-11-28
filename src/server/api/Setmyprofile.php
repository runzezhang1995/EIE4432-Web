<?php
	$post = $_POST;
	$file = $_FILES;
	$Restaurantid = $_POST["restaurant_id"];
	$Rname = $_POST["restaurantname"];
	$RAddress = $_POST["restaurantaddress"];
	$Rstart = $_POST["restaurantstart"];
	$Rclose = $_POST["restaurantclose"];
	$Rsize = $_POST["restaurantsize"];
	$Rcuisines = $_POST["restaurantcuisines"];
	$Averagecost = $_POST["restaurantcost"];
	$Phone = $_POST["restaurantphone"];
	$Website = $_POST["restaurantwebsite"];
	$result = array('success'=>true);
	
	// 接收文件
	var_dump($_FILES); // 区别于$_POST、$_GET
	print_r($_FILES);
	$file = $_FILES["img"];
	// 先判断有没有错
	if ($file["error"] == 0) 
	{
		// 成功 
		// 判断传输的文件是否是图片，类型是否合适
		// 获取传输的文件类型
		$typeArr = explode("/", $file["type"]);
		if($typeArr[0]== "image")
		{
			// 如果是图片类型
			$imgType = array("png","jpg","jpeg");
			if(in_array($typeArr[1], $imgType))
			{ 
				// 图片格式是数组中的一个
				// 类型检查无误，保存到文件夹内
				// 给图片定一个新名字 (使用时间戳，防止重复)
				$imgname = "C:/Users/WU Shijun DD/Desktop/image/".time().".".$typeArr[1];
				// 将上传的文件写入到文件夹中
				// 参数1: 图片在服务器缓存的地址
				// 参数2: 图片的目的地址（最终保存的位置）
				// 最终会有一个布尔返回值
				$bol = move_uploaded_file($file["tmp_name"], $imgname);
				if($bol)
				{
					echo "Upload succesfully！";
				} 
				else 
				{
					echo "Upload fail！";
				};
			};
		} 
		else 
		{
			echo "No picutres！";
		};
	} 
	else 
	{
		
		echo $file["error"];
	};

	$Rimage = $imgname;
	
	// Database Connection
	$conn = mysqli_connect("localhost","root","","project");
	if($conn->connect_error)
	{
		$result_json = json_encode(!$result);
		echo $result_json;
		exit;
	}
	
	$query1 = "UPDATE `restaurant` SET `Rname`='".$Rname."',`Rimage`='".$Rimage."',`RAddress`='".$RAddress."',
	`Rstart`='".$Rstart."',`Rclose`='".$Rclose."',`Rsize`='".$Rsize."',`Rcuisines`='".$Rcuisines."',`Average-cost`='".$Averagecost."',
	`Phone`='".$Phone."',`Website`='".$Website."'WHERE Rid = ".$Restaurantid;
	
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