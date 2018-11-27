<?php
    include '../../vendor/autoload.php';
    include 'general.php';
    $pug = new Pug();
    $pug->displayFile('../../template/login.pug', array(
        'title' => 'Login',
        'jsHost' => $server_root
    ));
?>