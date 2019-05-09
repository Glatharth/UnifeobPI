<div class="row">
  <div id="breadcrumb" class="col-xs-12">
    <a href="#" class="show-sidebar">
      <i class="fa fa-bars"></i>
    </a>
    <ol class="breadcrumb pull-left">
      <li><a href="index.php">Dashboard</a></li>
      <li><a href="#">Forms</a></li>
      <li><a href="#">Forms elements</a></li>
    </ol>
    <div id="social" class="pull-right">
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-youtube"></i></a>
    </div>
  </div>
</div>
<!-- -->
<?php
require_once ('../controle/Functions.php');
?>
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <div class="box">
      <div class="box-header">
        <div class="box-name">
          <i class="fa fa-bars"></i>
          <span>Selecione um comodo</span>
        </div>
        <div class="box-icons">
          <a class="collapse-link">
            <i class="fa fa-chevron-up"></i>
          </a>
          <a class="expand-link">
            <i class="fa fa-expand"></i>
          </a>
        </div>
        <div class="no-move"></div>
      </div>
      <div class="box-content">
        <h4 class="page-header">Selecione o comodo que deseja manusear os equipamentos.</h4>
        <div class="row form-group">
          <div class="col-sm-12">
            <select class="form-control" onchange="ChangeComodoONOFF(this)">
              <?php
              $id = "id_comodos";
              $tabela = "comodos";
              echo("<option value='0, Escolha um comodo'>Escolha um comodo</option>");
              foreach (ListAll($id, $tabela) as $i) {
                echo("<option value='$i[id_comodos], $i[nome]'>$i[nome]</option>");
              }?>
            </select>
          </div>
          </div>
        </div>
      </div>
  </div>

  <div class="col-xs-12 col-sm-6">
    <div class="box">
      <div class="box-header">
        <div class="box-name">
          <i class="fa fa-toggle-on"></i>
          <span id='TituloOnOff'>Escolha um comodo</span>
        </div>
        <div class="box-icons">
          <a class="collapse-link">
            <i class="fa fa-chevron-up"></i>
          </a>
          <a class="expand-link">
            <i class="fa fa-expand"></i>
          </a>
          <a class="close-link">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="no-move"></div>
      </div>
      <div class="box-content">
        <h4 class="page-header">Desativar/Ativar</h4>
        <div class="row form-group" id="radiosOnOff">
        </div>
      </div>
    </div>
  </div>
</div>


<!-- -->
<script type="text/javascript">
// Run Select2 on element
function Select2Test(){
  $("#el2").select2();
}
$(document).ready(function() {
  // Load script of Select2 and run this
  LoadSelect2Script(Select2Test);
  WinMove();
});
</script>
