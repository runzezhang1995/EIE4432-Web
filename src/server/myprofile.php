<?php
    include '../../vendor/autoload.php';
    include 'general.php';


    $rid = $_COOKIE['rid'];
    $rname = $_COOKIE['rname'];
    
    if(!$rid) {
        redirectToLogin();
        exit;
    }

    $pug = new Pug();
    $pug->displayFile('../../template/myprofile.pug', array(
        'title' => 'Myprofile',
        'jsHost' => $server_root,
        'rid' => $rid,
        'rname' => $rname
    ));
?>