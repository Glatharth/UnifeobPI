
<?php
require_once ('Conexao.php');
	function ListAll($id, $tabela) {
			$sql = "SELECT $id, nome FROM $tabela";
			$con = new Conexao();
			$con = $con->getConexao();
			$resultado = $con->query($sql);
			return $resultado;
	}

	function ListAll2($id, $id2, $tabela) {
			$sql = "SELECT $id, nome, $id2 FROM $tabela";
			$con = new Conexao();
			$con = $con->getConexao();
			$resultado = $con->query($sql);
			return $resultado;
	}

	function EquiptoComod($id) {
			$sql = "SELECT id_equipamentos, nome, id_comodos, estado FROM equipamentos WHERE id_comodos = $id";
			$con = new Conexao();
			$con = $con->getConexao();
			$resultado = $con->query($sql);
			return $resultado;
	}

	/*
	function getUserIndex($inicio, $fim) {
			include ('connect mysql.php');
			$sql = "SELECT name, lastname, discretion, nivel, id_user FROM users LIMIT $fim OFFSET $inicio";
			$gui = $conn->query($sql);
			return $gui;
	}

	function getUserUpload($email) {
		include ('connect mysql.php');
		$sql = "SELECT password, email, id_user FROM users WHERE email = '$email'";
		$r = $conn->query($sql);
		return $r;
	}
	*/
?>
