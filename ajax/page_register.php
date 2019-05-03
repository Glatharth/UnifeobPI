<?php
  //include 'login-verifica.php';
  //include '../controle/Forms_SQL.php';
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>DevOOPS</title>
		<meta name="description" content="description">
		<meta name="author" content="Evgeniya">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="../plugins/bootstrap/bootstrap.css" rel="stylesheet">
		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Righteous' rel='stylesheet' type='text/css'>
		<link href="../css/style_v2.css" rel="stylesheet">
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
				<script src="http://getbootstrap.com/docs-assets/js/html5shiv.js"></script>
				<script src="http://getbootstrap.com/docs-assets/js/respond.min.js"></script>
		<![endif]-->
	</head>
<body>
<div class="container-fluid">
	<div id="page-login" class="row">
		<div class="col-xs-12 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
			<div class="text-right">
				<a href="page_login.php" class="txt-default">Already have an account?</a>
			</div>
			<div class="box">
				<form action="../controle/Forms_SQL.php" method="POST">
        <input type="hidden" name="register" value="1"/>
				<div class="box-content">
					<div class="text-center">
						<h3 class="page-header">DevOOPS Register Page</h3>
					</div>
					<div class="form-group">
						<label class="control-label">nome</label>
						<input type="text" class="form-control" name="nome" id="nome" />
					</div>
					<div class="form-group">
						<label class="control-label">Email</label>
						<input type="email" class="form-control" name="email" id="email" />
					</div>
					<div class="form-group">
						<label class="control-label">Password</label>
						<input type="password" class="form-control" name="password" id="password" />
					</div>
					<div class="text-center">
						<input type="submit" class="btn btn-primary">
					</div>
				</div>
				</form>
			</div>
		</div>
	</div>
</div>
</body>
</html>
