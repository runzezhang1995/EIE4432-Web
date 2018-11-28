<?php
    include '../../vendor/autoload.php';

    $uid = $_COOKIE['uid'];
    $uname = $_COOKIE['uname'];
    
    if(!$uid) {
        redirectToLogin();
        exit;
    }

    $pug = new Pug();
    $pug->displayFile('../../template/myorder.pug', array(
        'title' => 'Myprofile',
        'uid' => $uid,
        'uname' => $uname
    ));
?>