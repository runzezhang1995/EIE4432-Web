<?php
    include '../../vendor/autoload.php';
    include 'general.php';

    $pug = new Pug();
    $pug->displayFile('../../template/restaurantList.pug', array(
        'title' => 'Restaurant List',
        'jsHost' => $server_root
    ));
?>