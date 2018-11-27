<?php
    $result = array('success'=> true);
    $restaurant = array(
        'Rname'=> $_POST['Rname'],
        'RAddress'=> $_POST['RAddress'],
        'Rstart' => $_POST['Rstart'],
        'Rclose' => $_POST['Rclose'],
        'Rsize'=> $_POST['Rsize'],
        'Rcuisines' => $_POST['Rcuisines'],
        'Average-cost'=> $_POST['Average-cost'],
        'Phone' => $_POST['Phone'],
        'Website'=> $_POST['Website']
                        );            
    // $result['restaurants'] = $restaurants;
    $result_json = json_encode($restaurant);
    echo $result_json;
    exit;
?>