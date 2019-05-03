<?php

require_once 'Conexao.php';


class Arduino {

    private $conexao;
    private $resultado;
    private $tabela;

    public function __construct() {
        $conn = new Conexao();
        $this->conexao = $conn->getConexao();
        $this->tabela = "equipamentos";
    }

    public function MudarEstado($estado, $id_equip) {
		if ($estado == 0)
			$this->sql = "UPDATE $this->tabela SET estado = 1 WHERE id_equipamentos = $id_equip";
		else
			$this->sql = "UPDATE $this->tabela SET estado = 0 WHERE id_equipamentos = $id_equip";
        $this->resultado = $this->conexao->prepare($this->sql);
        $this->resultado->execute();
    }
	
	// Simular Arduino
    public function Connect($parametro) {
        // URL para onde ser� enviada a requisi��o GET
        $url_feed = "192.168.0.168?" . $parametro;
        // Inicia a sess�o cURL
        $ch = curl_init();
        // Informa a URL onde ser� enviada a requisi��o
        curl_setopt($ch, CURLOPT_URL, $url_feed);
        // Se true retorna o conte�do em forma de string para uma vari�vel
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // Envia a requisi��o
        $result = curl_exec($ch);
        // Finaliza a sess�o
        curl_close($ch);
        return $result;
    }



}

?>
