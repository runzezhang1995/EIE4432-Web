<?php
    include '../../vendor/autoload.php';

    $rid = $_COOKIE['rid'];
    $rname = $_COOKIE['rname'];

    if(!$rid) {
        redirectToLogin();
        exit;
    }

    $pug = new Pug();
    $pug->displayFile('../../template/restaurantorder.pug', array(
        'title' => 'Restaurant List',
        'rid' => $rid,
        'rname' => $rname
    ));
?>