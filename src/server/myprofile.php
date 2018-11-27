<?php
    include '../../vendor/autoload.php';
    include 'general.php';

    $pug = new Pug();
    $pug->displayFile('../../template/myprofile.pug', array(
        'title' => 'Myprofile',
        'jsHost' => $server_root,
    ));
?>