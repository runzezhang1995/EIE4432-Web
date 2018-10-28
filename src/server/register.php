<?php
    include '../../vendor/autoload.php';
    $pug = new Pug();
    $pug->displayFile('../../template/register.pug', array(
        'title' => 'Register'
    ));
?>