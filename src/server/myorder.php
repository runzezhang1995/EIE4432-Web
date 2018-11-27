<?php
    include '../../vendor/autoload.php';
    $pug = new Pug();
    $pug->displayFile('../../template/myorder.pug', array(
        'title' => 'Myprofile'
    ));
?>