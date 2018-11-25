<?php
    include '../../vendor/autoload.php';
    $pug = new Pug();
    $pug->displayFile('../../template/restaurantList.pug', array(
        'title' => 'Restaurant List'
    ));
?>