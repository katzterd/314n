<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<title>314n</title>
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="viewport" content="width=device-width">
<link id="favicon" rel="shortcut icon" href="f1.png" type="image/x-icon">
<link rel="stylesheet" href="css/styles.css" type="text/css" media="screen, projection">
<link rel="stylesheet" type="text/css" href="css/scrollbars.css">
<link rel="stylesheet" type="text/css" href="css/nojs.css">
<link href="/css/fonts/Noto_Emoji.css" rel="stylesheet">

<!--<link rel="stylesheet" type="text/css" href="css/scrollbars-itunes.css" />-->
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lte IE 6 ]><script type="text/javascript">window.location.href="ie6/index_ru.html";</script><![endif]-->

<?php 
require_once realpath(dirname(__FILE__)).'/fonts.php';
$fonts = new Fonts();
echo $fonts->getCSS();
?>
    
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery.event.drag-2.0.min.js" type="text/javascript"></script>
<script src="js/jquery.ba-resize.min.js" type="text/javascript"></script>
<script src="js/mousehold.js" type="text/javascript"></script>
<script src="js/jquery.mousewheel.js" type="text/javascript"></script>
<script src="js/aplweb.scrollbars2.js" type="text/javascript"></script>
<script src="js/scroll-startstop.events.jquery.js" type="text/javascript"></script>
<script src="js/function_up_down.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
<?php if (USE_HWT): ?><script src="js/housewife.tools.local.js" type="text/javascript"></script><?php endif; ?>

</head>
<body class="native-scrollbar">
<script>document.head.querySelector("link[href='css/nojs.css']").href = "css/yesjs.css"</script>
<div class="border"></div>
<div id="board">
    <div id="wrapper">
    <div class="fone"></div>
        <div id="scrollTest">
            <div style="width: 100%; position: relative" id="console">
                <div id="content">