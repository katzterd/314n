<?php 
    session_start(); 

    require_once 'inc/executer.php';
    $executer = new Executer();
    $login = $executer->check_login();

    require_once 'inc/head.php';
    $msg = file_get_contents('inc/welcome.html');
    unset($_SESSION['edit']);
    $msg .= $login;
    $_SESSION['msg'] = $msg;
    echo $msg;
    $path = '';
    $edittext = '';
    require_once 'inc/butt.php';
?>
