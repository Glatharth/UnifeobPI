<?php

require_once 'Conexao.php';


class UsuarioDAO {

    private $conexao;
    private $sql;
    private $usuario;
    private $resultado;
    private $tabela;

    public function __construct() {
        $conn = new Conexao();
        $this->conexao = $conn->getConexao();
        $this->tabela = "users";
    }

    public function listarTodos() {
        $this->sql = "select * from $this->tabela";
        $this->resultado = $this->conexao->prepare($this->sql);
        $this->resultado->execute();
        return $this->resultado->fetchAll();
    }

    public function fazerLogin($user, $pass) {
        $this->sql = "select * from $this->tabela where nome='$user' and password=MD5('$pass')";
        $this->resultado = $this->conexao->prepare($this->sql);
        $this->resultado->execute();
        $resultado = $this->resultado->fetch(PDO::FETCH_OBJ);
        return $resultado;

    }



}

?>
