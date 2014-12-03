<?php if(isset($_GET['getUi'])){ 
	
	$arr= array();
	$arr['test'] = 'yesy';
	echo(json_encode($arr));
	exit;

} ?>

<?php if(isset($_GET['step'])){ 
	
	echo '{"success":true,"application":{"id":"91","photo_id":"2","photo_explanation":"This is an explanation!","advice_1":"Bla bla bla","advice_2":"ffss fsfss f","advice_3":"ssfs sfs","favourite_brand":"Saatchi","problem":"This is a problem","youtube_url ":null,"name":"fsklsk","email":"bla@bla.com","problem_solution":"This is my solution","favourite_brand_pitch":"Cool company  Cool company Cool company Cool company Cool company v Cool company v Cool company v v Cool company v Cool company"}}';
	exit;

} ?>



<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title></title>
	<meta name="description" content="">
	<meta name="author" content="">

	<meta name="viewport" content="width=device-width,initial-scale=1">

	<link rel="stylesheet" href="/assets/css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Roboto:100,400,500,300,700' rel='stylesheet' type='text/css'>

	<script src="/assets/js/libs/modernizr.js"></script>
	<script data-main="http://local.grad.com/assets/js/main" src="http://local.grad.com/assets/js/libs/require.js"></script>
	<!-- Fonts -->
	<script src="//use.typekit.net/ybt6ttx.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

</head>
<body>

	<div id="application"></div>

</body>
</html>