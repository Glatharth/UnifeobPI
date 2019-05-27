<%@ Page Title="" Language="C#" MasterPageFile="~/Protegida/MasterPage.master" AutoEventWireup="true" CodeFile="Pacientes.aspx.cs" Inherits="Protegida_Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <asp:ListView ID="ListView1" runat="server" DataSourceID="SqlDataSource1">
        <ItemTemplate>

            <div style="margin:100px auto; text-align:center">

<div style="width:25%; float:left; margin-top:20px; margin-left:20px;">
    <div style="width:90%; height:200px;border:3px solid black;">
        <div style="width:100%; margin-top:50px"><%#Eval("Nome")%></div>
        <br />
        <div style="width:100%"><%#Eval("Sexo")%></div>
        <br />
        <div style="width:100%"><%#Eval("DataNasc")%></div>
    </div>
</div>
                </div>

        </ItemTemplate>
     </asp:ListView>
    

    
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT * FROM [tb_pacientes] WHERE ([Dr] = ?) ORDER BY [Nome]">
        <SelectParameters>
            <asp:SessionParameter Name="Dr" SessionField="id" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>

</asp:Content>

