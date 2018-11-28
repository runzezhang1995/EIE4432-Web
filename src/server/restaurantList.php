<?php
    include '../../vendor/autoload.php';
    include 'general.php';

    $uid = $_COOKIE['uid'];
    $uname = $_COOKIE['uname'];

    if(!$uid) {
        redirectToLogin();
        exit;
    }
    $pug = new Pug();
    $pug->displayFile('../../template/restaurantList.pug', array(
        'title' => 'Restaurant List',
        'jsHost' => $server_root,
        'uid' => $uid,
        'uname' => $uname
    ));
?>