<?php
    include '../../vendor/autoload.php';
    $pug = new Pug();
    $pug->displayFile('../../template/restaurantorder.pug', array(
        'title' => 'Restaurant List'
    ));
?>