<?php
    include '../../vendor/autoload.php';
    include 'general.php';

    $pug = new Pug();
    $pug->displayFile('../../template/register.pug', array(
        'title' => 'Register',
        'jsHost' => $server_root
    ));
?>