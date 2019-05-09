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
<?php require_once ('../controle/Functions.php'); ?>
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <div class="box">
      <div class="box-header">
        <div class="box-name">
          <i class="fa fa-trash"></i>
          <span>Deletar usuario</span>
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
        <h4 class="page-header">Selecione o usuario que deseja excluir.</h4>
        <form action="controle/Forms_SQL.php" method="POST">
        <input type="hidden" name="delusers" value="1"/>
        <div class="row form-group">
          <div class="col-sm-12">
            <select name="del" class="form-control">
              <?php
              $id = "id_users";
              $tabela = "users";
              foreach (ListAll($id, $tabela) as $i) {
                echo("<option value='$i[id_users]'>$i[nome]</option>");
              }?>
            </select>
          </div>
          </div>
          <div class="text-center">
            <input type="submit" class="btn btn-danger" value="Deletar">
          </div>
        </form>
        </div>
      </div>
  </div>


  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <div class="box">
        <div class="box-header">
          <div class="box-name">
            <i class="fa fa-plus"></i>
            <span>Add Usuario</span>
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
          <form action="controle/Forms_SQL.php" method="POST">
            <input type="hidden" name="adduser" value="1"/>
  					<h4 class="page-header">Dados.</h4>
  					<div class="form-group">
  						<label class="control-label">Nome</label>
  						<input type="text" class="form-control" name="nome" />
  					</div>
  					<div class="form-group">
  						<label class="control-label">Email</label>
  						<input type="email" class="form-control" name="email" />
  					</div>
  					<div class="form-group">
  						<label class="control-label">Senha</label>
  						<input type="password" class="form-control" name="password" />
  					</div>
            <h4 class="page-header">Permissão</h4>
  					<div class="form-group">
              <div class="row form-group">
                <div class="col-sm-12">
                  <select name="nivel" class="form-control">
                    <option value="2">Administrador</option>
                    <option value="1">Usuario</option>
                  </select>
                </div>
                </div>
  					</div>
  					<div class="text-center">
  						<input type="submit" value="Adicionar" class="btn btn-success">
  					</div>
  				</form>
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
