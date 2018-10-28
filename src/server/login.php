<?php
    include '../../vendor/autoload.php';
    $pug = new Pug();
    $pug->displayFile('../../template/login.pug', array(
        'title' => 'Login'
    ));
?>