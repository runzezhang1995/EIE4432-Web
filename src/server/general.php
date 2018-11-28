<?php
    $server_root = 'http://localhost';
    function redirectToLogin()
    {
        header("location:".$server_root."/EIE4432-WEB/src/server/login.php");
    }


?>