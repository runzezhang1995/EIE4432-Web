<?php
    $result = array('success'=> true);
    $orders = array();
    for ($i=0; $i < 6; $i++) { 
        $order = array('order_id' => $i,
                        'restaurant'=> '牛涮锅',
                        'thumbnail_image' => 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaOODE-yMRH8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaOODE-yMRH8&docid=AKOJVGdpwyMsvM&tbnid=-rf82TJiqFGdXM%3A&vet=10ahUKEwiR2YrLie_eAhVGabwKHTR7DgYQMwhfKBcwFw..i&w=1280&h=720&safe=strict&bih=938&biw=1920&q=dark%20soul%20400*%20300&ved=0ahUKEwiR2YrLie_eAhVGabwKHTR7DgYQMwhfKBcwFw&iact=mrc&uact=8',
                        'order_time' => '2018-11-26 11:50:00',
                        'order_status' => 'accepted'
                        );
        $orders[] = $order;              
    }

    $result['orders'] = $orders;
    $result_json = json_encode($result);
    echo $result_json;
    exit;
?>