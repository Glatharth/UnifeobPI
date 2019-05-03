/*
function excluirEquipamento() {
    var del = $("#del option:selected").val();
    $.ajax({
            url     :   "controle/Forms_SQL.php"
        ,   method  :   "post"
        ,   data    :   {delequip :1, del :del}
    });
}
*
function adicionarEquipamento() {
    var nome = $("#nome").val();
    var nivel = $("#nivel option:selected").val();
    var id_comodos = $("#id_comodos option:selected").val();
    alert(id_comodos);
    $.ajax({
            url     :   "controle/Forms_SQL.php"
        ,   method  :   "post"
        ,   data    :   {addequip :1, nome :nome, nivel :nivel, id_comodos :id_comodos}
    });
}
/*
function deletarUsuario() {
    var del = $("#del option:selected").val();
    $.ajax({
            url     :   "controle/Forms_SQL.php"
        ,   method  :   "post"
        ,   data    :   {delusers :1, del :del}
    });
}

function adicionarUsuario() {
    var nome = $("#nome").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var nivel = $("#nivel option:selected").val();
    $.ajax({
            url     :   "controle/Forms_SQL.php"
        ,   method  :   "post"
        ,   data    :   {adduser :1, nome :nome, email :email, password :password, nivel :nivel}
    });
}


function excluirComodo() {
    var del = $("#del option:selected").val();
    $.ajax({
            url     :   "controle/Forms_SQL.php"
        ,   method  :   "post"
        ,   data    :   {delcomodo :1, del :del}
    });
}
function adicionarComodo() {
    var nome = $("#nome").val();
    var nivel = $("#nivel option:selected").val();
    $.ajax({
            url     :   "controle/Forms_SQL.php"
        ,   method  :   "post"
        ,   data    :   {addcomodo :1, nome :nome, nivel :nivel},
        success: function(data) {
          console.log(data);
          console.log('success');
        },
        error: function (request, status, error) {
            console.log(error);
            console.log('erro');
        }
    });
}
*/


function ChangeComodoONOFF(comodo) {
    //alert(comodo.options[comodo.selectedIndex].value);
    //alert(comodo.options[comodo.selectedIndex].value.split(",")[0]);
    var idcomodo = comodo.options[comodo.selectedIndex].value.split(",")[0];
    $('#TituloOnOff').text(comodo.options[comodo.selectedIndex].value.split(",")[1]);
    $.ajax({
            url     :   "controle/MontarRadioOnOff.php"
        ,   method  :   "post"
        ,   data    :   {idcomodo :idcomodo},
        success: function( data ) {
          $('#radiosOnOff').html(data);
        },
        error: function (request, status, error) {
            //alert(error);
            alert('erro');
        }
    });


}

function ChangeONOFF(id) {
	
	var check = document.getElementById("check_" + id ).value;
		
		$.ajax({
                url     :   "controle/Arduino.php"
            ,   method  :   "post"
            ,   data    :   {arduino :check, id_equip :id},
            success: function(data) {
              console.log(data);
              console.log("success");
            },
            error: function (request, status, error) {
                //alert(error);
                alert('erro');
            }
        });
}



console.log("JavaScript: OK");
