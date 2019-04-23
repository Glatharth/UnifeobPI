<?php
class Conexao
{

	private $servidor;
	private $usuario;
	private $senha;
	private $database;
	private $conexao;

	public function __construct()
    {
        $this->servidor = "localhost";
        $this->usuario = "root";
        $this->senha = "";
        $this->database = "UnifeobPI";

		try
		{
			$this->conexao = new PDO("mysql:host=$this->servidor;dbname=$this->database", $this->usuario, $this->senha);
			$this->conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
		catch (PDOException $e)
		{
			echo "Erro banco de dados: " . $e->getMessage() . "<br/>";
		}
    }

	public function getConexao() {
        return $this->conexao;
    }

}

?>
