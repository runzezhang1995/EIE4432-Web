<?php
    $result = array('success'=> true);
    $restaurants = array();
    for ($i=0; $i < 12; $i++) { 
        $restaurant = array('restaurant_id' => $i,
                            'restaurant'=> '牛涮锅',
                            'thumbnail_image' => 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaOODE-yMRH8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaOODE-yMRH8&docid=AKOJVGdpwyMsvM&tbnid=-rf82TJiqFGdXM%3A&vet=10ahUKEwiR2YrLie_eAhVGabwKHTR7DgYQMwhfKBcwFw..i&w=1280&h=720&safe=strict&bih=938&biw=1920&q=dark%20soul%20400*%20300&ved=0ahUKEwiR2YrLie_eAhVGabwKHTR7DgYQMwhfKBcwFw&iact=mrc&uact=8',
                            'cuisines' => array('chinese', 'japanese'),
                            'average_cost'=> '$150-$200',
                            'start_time' => '12:00',
                            'end_time' => '22:00'
                        );
        $restaurants[] = $restaurant;              
    }

    $result['restaurants'] = $restaurants;
    $result_json = json_encode($result);
    echo $result_json;
    exit;
?>