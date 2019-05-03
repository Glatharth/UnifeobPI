<?php
require_once ('Conexao.php');

// Usuarios //
if (isset($_POST['adduser'])) {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $nivel = $_POST['nivel'];
  $sql="insert into users (nome, email, password, nivel) values (:nome,:email, MD5(:password), :nivel)";
  $con = new Conexao();
  $con = $con->getConexao();
  $resultado= $con->prepare ($sql);
  $resultado-> bindParam(':nome',$nome);
  $resultado-> bindParam(':email',$email);
  $resultado-> bindParam(':password',$password);
  $resultado-> bindParam(':nivel',$nivel);
  $resultado -> execute();
  header("location:../#ajax/users.php");
  exit();
}

if (isset($_POST['delusers'])) {
  $del = $_POST['del'];
  $sql="delete from users WHERE id_users=:del";
  $con = new Conexao();
  $con = $con->getConexao();
  $resultado= $con->prepare ($sql);
  $resultado-> bindParam(':del',$del);
  $resultado -> execute();
  header("location:../#ajax/users.php");
  exit();
}

// Equipamentos //
if (isset($_POST['delequip'])) {
  $del = $_POST['del'];
  $sql="delete from equipamentos WHERE id_equipamentos=:del";
  $con = new Conexao();
  $con = $con->getConexao();
  $resultado= $con->prepare ($sql);
  $resultado-> bindParam(':del',$del);
  $resultado -> execute();
  header("location:../#ajax/equipamentos.php");
  exit();
}

if (isset($_POST['addequip'])) {
  $nome = $_POST['nome'];
  $nivel = $_POST['nivel'];
  $id_comodos = $_POST['id_comodos'];
  $sql="insert into equipamentos (nome, permissao, id_comodos, estado) values (:nome, :nivel, :id_comodos, '0')";
  $con = new Conexao();
  $con = $con->getConexao();
  $resultado= $con->prepare ($sql);
  $resultado-> bindParam(':nome',$nome);
  $resultado-> bindParam(':nivel',$nivel);
  $resultado-> bindParam(':id_comodos',$id_comodos);
  $resultado -> execute();
  header("location:../#ajax/equipamentos.php");
  exit();
}

// Comodo //
if (isset($_POST['addcomodo'])) {
  $nome = $_POST['nome'];
  $nivel = $_POST['nivel'];
  $sql= "insert into comodos (nome, permissao) values (:nome, :nivel)";
  $con = new Conexao();
  $con = $con->getConexao();
  $resultado= $con->prepare ($sql);
  $resultado-> bindParam(':nome',$nome);
  $resultado-> bindParam(':nivel',$nivel);
  $resultado -> execute();
  header("location:../#ajax/comodo.php");
  exit();
}

if (isset($_POST['delcomodo'])) {
  $del = $_POST['del'];
  $sql="delete from comodos WHERE id_comodos=:del";
  $con = new Conexao();
  $con = $con->getConexao();
  $resultado= $con->prepare ($sql);
  $resultado-> bindParam(':del',$del);
  $resultado -> execute();
  header("location:../#ajax/comodo.php");
  exit();
}
header("location:../#ajax/dashboard.php");
?>
