<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="preview_dotnet_templates_registration_Form_index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
    <meta charset="utf-8" />
    <!-- Set the viewport width to device width for mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="Coming soon, Bootstrap, Bootstrap 3.0, Free Coming Soon, free coming soon, free template, coming soon template, Html template, html template, html5, Code lab, codelab, codelab coming soon template, bootstrap coming soon template">
    <title>Login</title>
    
    <link href='http://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet'
        type='text/css' />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300,800'
        rel='stylesheet' type='text/css' />
    
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/font-awesome.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">

    <div class="container">

        <div style="width:100%; margin:100px auto">
            <div class="registrationform">
                <div class="form-horizontal">
                    <fieldset>

                        <legend>Cadastro de paciente<i class="fa fa-pencil pull-right"></i></legend>

                        <!-- Nome -->
                        <div class="form-group">
                            <asp:Label ID="Label1" runat="server" Text="Nome" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxNome" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Email -->
                        <div class="form-group">
                            <asp:Label ID="Label2" runat="server" Text="Email" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxEmail" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Data de Nascimento -->
                        <div class="form-group">
                            <asp:Label ID="Label3" runat="server" Text="Data de Nascimento" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxNasc" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                       <!-- Sexo -->
                        <div class="form-group">
                            <asp:Label ID="Label10" runat="server" Text="Sexo" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxSexo" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Cpf -->
                        <div class="form-group">
                            <asp:Label ID="Label4" runat="server" Text="Cpf" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxCpf" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Telefone -->
                        <div class="form-group">
                            <asp:Label ID="Label5" runat="server" Text="Telefone" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxTelefone" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Cidade -->
                        <div class="form-group">
                            <asp:Label ID="Label6" runat="server" Text="Cidade" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxCidade" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Uf -->
                        <div class="form-group">
                            <asp:Label ID="Label7" runat="server" Text="Uf" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxUf" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Endereco -->
                        <div class="form-group">
                            <asp:Label ID="Label8" runat="server" Text="Endereco" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxEndereco" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->

                        <!-- Descricao -->
                        <div class="form-group">
                            <asp:Label ID="Label9" runat="server" Text="Descricao" CssClass="col-lg-2 control-label"></asp:Label>

                            <div class="col-lg-10">
                                <asp:TextBox ID="TextBoxDescricao" runat="server"  CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                        <!-- -->
                                           
                        <div class="form-group">
                            <div class="col-lg-10 col-lg-offset-2">
                                <asp:Button ID="btnSubmit" runat="server" CssClass="btn btn-primary" Text="Entrar" OnClick="btnSubmit_Click1" />
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/jquery.backstretch.js" type="text/javascript"></script>
    <script type="text/javascript">
        'use strict';

       
        
        $.backstretch(
        [
            "img/44.jpg",       
        ],

        {
            duration: 7500,
            fade: 1500
        }
    );
    </script>
        </div>
        
    </form>
</body>
</html>
