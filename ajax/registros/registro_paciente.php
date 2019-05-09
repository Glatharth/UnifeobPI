<div class="row">
	<div id="breadcrumb" class="col-xs-12">
		<a href="#" class="show-sidebar">
			<i class="fa fa-bars"></i>
		</a>
		<ol class="breadcrumb pull-left">
			<li><a href="index.html">Dashboard</a></li>
			<li><a href="#">Registros</a></li>
			<li><a href="#">Pacientes</a></li>
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
<div class="row">
	<div class="col-xs-12 col-sm-12">
		<div class="box">
			<div class="box-header">
				<div class="box-name">
					<i class="fa fa-search"></i>
					<span>Registro obrigatório</span>
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
				<h4 class="page-header">Registro obrigatório</h4>
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label class="col-sm-2 control-label">Primeiro nome</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" placeholder="Primeiro nome" data-toggle="tooltip" data-placement="bottom" title="Coloque o nome do paciente">
						</div>
						<label class="col-sm-2 control-label">Sobrenome</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" placeholder="Last name" data-toggle="tooltip" data-placement="bottom" title="Coloque o sobrenome do paciente">
						</div>
					</div>
					<div class="form-group has-success has-feedback">
						<label class="col-sm-2 control-label">Empresa em que trabalha</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" placeholder="Nome da empresa">
						</div>
						<label class="col-sm-2 control-label">Endereço</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" placeholder="Endereço">
							<span class="fa fa-check-square-o txt-success form-control-feedback"></span>
						</div>
					</div>
					<div class="form-group has-warning has-feedback">
						<label class="col-sm-2 control-label">Residência</label>
						<div class="col-sm-2">
							<input type="text" class="form-control" placeholder="Cidade">
							<span class="fa fa-key txt-warning form-control-feedback"></span>
						</div>
						<div class="col-sm-2">
							<input type="text" class="form-control" placeholder="Estado">
							<span class="fa fa-frown-o txt-danger form-control-feedback"></span>
						</div>
						<label class="col-sm-1 control-label">CEP</label>
						<div class="col-sm-2">
							<input type="text" class="form-control" placeholder="CEP" data-toggle="tooltip" data-placement="top" title="Coloque o CEP nesse campo.">
						</div>
						<div class="col-sm-2">
							<div class="checkbox">
								<label>
									<input type="checkbox" checked> Sem CEP
									<i class="fa fa-square-o small"></i>
								</label>
							</div>
						</div>
					</div>
					<div class="form-group has-warning has-feedback">
						<label class="col-sm-2 control-label">Estado civil</label>
						<div class="col-sm-4">
							<select id="s2_with_tag" multiple="multiple" class="populate placeholder">
								<option>Solteiro</option>
								<option>Casado</option>
								<option>Separado</option>
								<option>Divorciado</option>
								<option>Viúvo</option>
							</select>
						</div>
					</div>
					<div class="form-group has-error has-feedback">
						<label class="col-sm-2 control-label">Data de nascimento</label>
						<div class="col-sm-2">
							<input type="text" id="input_date" class="form-control" placeholder="Data">
							<span class="fa fa-calendar txt-danger form-control-feedback"></span>
						</div>
						<div class="col-sm-2">
							<input type="text" id="input_time" class="form-control" placeholder="Time">
							<span class="fa fa-clock-o txt-danger form-control-feedback"></span>
						</div>
						<label class="col-sm-2 control-label">Disabled input</label>
						<div class="col-sm-2">
							<input type="text" class="form-control" placeholder="No info" data-toggle="tooltip" data-placement="top" title="Hello world!" disabled>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label" for="form-styles">Relative Sizing</label>
						<div class="col-sm-10">
							<div class="row">
								<div class="col-sm-2">
									<input class="form-control" id="form-styles" placeholder=".col-sm-2" type="text">
								</div>
							</div>
							<div class="row">
								<div class="col-sm-12">
									<p><small>Dynamic resizing col</small></p>
									<div class="progress progress-ui">
										  <div class="progress-bar progress-bar-success slider-style slider-range-min" style="width: 100%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label" for="form-styles">Textarea</label>
						<div class="col-sm-10">
								<textarea class="form-control" rows="5" id="wysiwig_simple"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label" for="form-styles">Extreme Textarea</label>
						<div class="col-sm-10">
								<textarea class="form-control" rows="5" id="wysiwig_full"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">Input groups</label>
						<div class="col-sm-2">
							<div class="input-group">
							  <span class="input-group-addon"><i class="fa fa-github-square"></i></span>
							  <input type="text" class="form-control" placeholder="GitHub">
							</div>
						</div>
						<div class="col-sm-2">
							<div class="input-group">
							  <input type="text" class="form-control" placeholder="Group">
							  <span class="input-group-addon"><i class="fa fa-group"></i></span>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="input-group">
							  <span class="input-group-addon"><i class="fa fa-money"></i></span>
							  <input type="text" class="form-control" placeholder="Money">
							  <span class="input-group-addon"><i class="fa fa-usd"></i></span>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-2">
							<button type="cancel" class="btn btn-default btn-label-left">
							<span><i class="fa fa-clock-o txt-danger"></i></span>
								Cancel
							</button>
						</div>
						<div class="col-sm-2">
							<button type="submit" class="btn btn-warning btn-label-left">
							<span><i class="fa fa-clock-o"></i></span>
								Send later
							</button>
						</div>
						<div class="col-sm-2">
							<button type="submit" class="btn btn-primary btn-label-left">
							<span><i class="fa fa-clock-o"></i></span>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
// Run Estado civil
function DemoSelect2(){
	$('#s2_with_tag').select2({placeholder: "Select OS"});
	$('#s2_country').select2();
}
// Run timepicker
function DemoTimePicker(){
	$('#input_time').timepicker({setDate: new Date()});
}
$(document).ready(function() {
	// Create Wysiwig editor for textare
	TinyMCEStart('#wysiwig_simple', null);
	TinyMCEStart('#wysiwig_full', 'extreme');
	// Add slider for change test input length
	FormLayoutExampleInputLength($( ".slider-style" ));
	// Initialize datepicker
	$('#input_date').datepicker({setDate: new Date()});
	// Load Timepicker plugin
	LoadTimePickerScript(DemoTimePicker);
	// Add tooltip to form-controls
	$('.form-control').tooltip();
	LoadSelect2Script(DemoSelect2);
	// Load example of form validation
	LoadBootstrapValidatorScript(DemoFormValidator);
	// Add drag-n-drop feature to boxes
	WinMove();
});
</script>