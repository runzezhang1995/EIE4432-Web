<?php
    $result = array('success'=> true);
    $orders = array();
    for ($i=0; $i < 6; $i++) { 
        $order = array('order_id' => $i,
                        'order_time' => '2018-11-26 11:50:00',
                        'order_name'=> 'Ms.Li',
                        'order_date'=> '2018-11-26',
                        'order_period'=> '20:00:00',
                        'numberofpeople' => '4'
                        );
        $orders[] = $order;              
    }

    $result['orders'] = $orders;
    $result_json = json_encode($result);
    echo $result_json;
    exit;
?>