<?php
    include '../../vendor/autoload.php';
    $pug = new Pug();
    $pug->displayFile('../../template/myprofile.pug', array(
        'title' => 'Myprofile'
    ));
?>