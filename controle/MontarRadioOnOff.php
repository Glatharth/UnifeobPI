<?php
require_once('Functions.php');

$id = $_POST['idcomodo'];

$ret = '';
foreach (EquiptoComod($id) as $i) {	
    $ret .= "<div class='col-sm-4'>";
    $ret .= $i['nome'];
    $ret .= "<div class='toggle-switch toggle-switch-success'>";
    $ret .= "<label>";
	if ($i['estado'] == 0)
		$ret .= "<input id='check_$i[id_equipamentos]' onclick='ChangeONOFF($i[id_equipamentos])' value='0' type='checkbox'>";
	else
		$ret .= "<input id='check_$i[id_equipamentos]' onclick='ChangeONOFF($i[id_equipamentos])' value='1' type='checkbox' checked>";
    $ret .= "<div class='toggle-switch-inner'></div>";
    $ret .= "<div class='toggle-switch-switch'><i class='fa fa-check'></i></div>";
    $ret .= "</label>";
    $ret .= "</div>";
    $ret .= "</div>";
}
echo $ret;
// /    $ret .= "<input id='checked' onclick='ChangeONOFF(this, $i[id_equipamentos])' value='$i[id_equipamentos]' type='checkbox'>";

?>
