<?php
	error_reporting(0);
	
	$result = array('success'=>true);
	// 接收文件
	// var_dump($_FILES); // 区别于$_POST、$_GET
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
				$imgname = "../../../public/images/".time().".".$typeArr[1];
				// 将上传的文件写入到文件夹中
				// 参数1: 图片在服务器缓存的地址
				// 参数2: 图片的目的地址（最终保存的位置）
				// 最终会有一个布尔返回值
				$bol = move_uploaded_file($file["tmp_name"], $imgname);
				if($bol)
				{
					$result['img_url'] = '../../public/images/'.time().".".$typeArr[1];
					$result_json = json_encode($result);
					echo $result_json;
					exit;
				} 
				else 
				{
					$result['success'] = false;
					$result['test'] = '1234';
					$result_json = json_encode(!$result);
					echo $result_json;
					exit;
				};
			};
		} 
		else 
		{
			echo "No picutres！";
			$result_json = json_encode(!$result);
			echo $result_json;
			exit;
		};
	} 
	else 
	{
		echo $file["error"];
	};

	

?>