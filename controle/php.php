<?php
require_once ('Conexao.php');
$nome = $_GET['nome'];
$nivel = $_GET['nivel'];
$sql= "insert into comodos (nome, permissao) values (:nome, :nivel)";
$con = new Conexao();
//echo(var_dump($sql));
$con = $con->getConexao();
$resultado= $con->prepare ($sql);
$resultado-> bindParam(':nome',$nome);
$resultado-> bindParam(':nivel',$nivel);
$resultado -> execute();
echo(var_dump($resultado));
?>
