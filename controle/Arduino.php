<?php
  require_once ('Class_Arduino.php');
  require_once ('Conexao.php');
  
  $Arduino = new Arduino();
  
  $id_equip = $_POST['id_equip'];
  $estado = (int)$_POST["arduino"];
  
  if ($estado == 1)
	  $parametro="L=1"
  else
	  $parametro="L=0"
  
  $res = $Arduino->Connect($parametro);
  
  //Capturando retorno do Arduino para redirecionar ao formulario
  $retorno_arduino = explode("\n", $res);
  $novo_parametro = "umid=" . trim($retorno_arduino[0]) . "\n&temp=" . trim($retorno_arduino[1]);
  
  //Alterando estado no banco
  return $Arduino->MudarEstado($res, $id_equip);
  
?>
