<%@ Page Title="" Language="C#" MasterPageFile="~/Protegida/MasterPage.master" AutoEventWireup="true" CodeFile="CadastroPaciente.aspx.cs" Inherits="Protegida_Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">

    <style>  

        .full {
            width:95% !important;
        }

    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <section id="content-wrapper" style="margin-top:10px; margin-left:200px;">
        <div class="container-fluid">

            <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextNome" runat="server" placeholder="Nome.."></asp:TextBox>
            </div>

            <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextSexo" runat="server" placeholder="Sexo.."></asp:TextBox>
            </div>

            <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextIdade" runat="server" placeholder="Idade.."></asp:TextBox>
            </div>

            <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextCpf" runat="server" placeholder="CPF.."></asp:TextBox>
            </div>
           
             <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextRg" runat="server" placeholder="RG.."></asp:TextBox>
            </div>

             <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextTelefone" runat="server" placeholder="Telefone.."></asp:TextBox>
            </div>

             <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextEmail" runat="server" placeholder="E-mail.."></asp:TextBox>
            </div>

             <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextCidade" runat="server" placeholder="Cidade.."></asp:TextBox>
            </div>

             <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextBoxUf" runat="server" placeholder="Uf.."></asp:TextBox>
            </div>

            <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextEndereco" runat="server" placeholder="Endereço.."></asp:TextBox>
            </div>

            <div class="form-group form-inline">
                 <asp:TextBox class="form-control full" ID="TextDescricao" runat="server" placeholder="Descrição.."></asp:TextBox>
            </div>

            <asp:Button ID="Button1" runat="server" class="btn btn-danger" Text="Cadastrar" OnClick="Button1_Click" />

        </div>

    </section>

    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT * FROM [tb_pacientes]"></asp:SqlDataSource>

</asp:Content>

