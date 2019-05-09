<?php
if (isset($_SESSION)) {
    session_destroy();
}
session_start();
$mensagem = "";

require_once '../controle/UsuarioDAO.php';

$usuarioDAO = new UsuarioDAO();

if (isset($_POST['nome']) AND isset($_POST['password'])) {
    $user = $_POST['nome'];
    $pass = $_POST['password'];

    if ($user != "" AND $pass != "") {

        $res = $usuarioDAO->fazerLogin($user, $pass);
        if ($res != null) {
            $_SESSION['nivel'] = $res->nivel;
            $_SESSION['nome'] = $res->nome;
            $_SESSION['id_users'] = $res->id_users;
            echo "<script>window.open('../index.php','_self');</script>";
        } else {
            $mensagem = "Usuário e/ou senha incorretos!";
        }
    } else {
        $mensagem = "Preencha os dois campos para continuar!";
    }
}

if (isset($_GET['acessoRestrito'])) {
    $mensagem = "Acesso restrito aos usuários o sistema!!!";
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>DevOOPS</title>
		<meta name="description" content="description">
		<meta name="author" content="Evgeniya">
		<meta name="keyword" content="keywords">
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
				<a href="page_register.html" class="txt-default">Need an account?</a>
			</div>
			<div class="box">
				<form action="page_login.php" name="Form" method="POST">
				<div class="box-content">
					<div class="text-center">
						<h3 class="page-header">DevOOPS Login Page</h3>
					</div>
					<div class="form-group">
						<label class="control-label">Username</label>
						<input type="text" class="form-control" name="nome" />
					</div>
					<div class="form-group">
						<label class="control-label">Password</label>
						<input type="password" class="form-control" name="password" />
					</div>
					<div class="text-center">
						<input type="submit" id="login" class="btn btn-primary" value="Sign in">
					</div>
				</div>
				</form>
			</div>
		</div>
	</div>
</div>
</body>
</html>
