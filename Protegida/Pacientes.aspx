<%@ Page Title="" Language="C#" MasterPageFile="~/Protegida/MasterPage.master" AutoEventWireup="true" CodeFile="Pacientes.aspx.cs" Inherits="Protegida_Default3" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">

    <link href="../css/paciente.css" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <section id="content-wrapper">
        <div class="container-fluid">
            <div class="row" id="order_cards_filter">

                <asp:ListView ID="ListView1" runat="server" DataSourceID="SqlDataSource1">
                    <ItemTemplate>

                <div class="card">
                        <h1 class="card-title"><%#Eval("Nome")%></h1>
                        <img class="card-img-top" src="../images/480x320.png" alt="Card image" data-toggle="modal"
                             data-target="#myModal<%#Eval("id")%>">
                        <div class="card-body">
                            <p class="card-text-info">Sexo: <%#Eval("Sexo")%></p>
                            <p class="card-text-info"><%#Eval("Idade")%> anos</p>
                            <p class="card-text-info"><%#Eval("Telefone")%></p>
                            <p class="card-text-info"><%#Eval("Cidade")%></p>

                            <div class="modal fade" id="myModal<%#Eval("id")%>">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title"><%#Eval("Nome")%> - <%#Eval("Idade")%> anos</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <article class="modal-text">
                                                <figure class="left">
                                                    <img src="../images/480x320.png" alt="Card image" />
                                                </figure>

                                                <p>E-mail: <%#Eval("Email")%></p>
                                                <p>Telefone: <%#Eval("Telefone")%></p>
                                                <p>Sexo: <%#Eval("Sexo")%></p>
                                                <p>CPF: <%#Eval("Cpf")%></p>
                                                <p>RG: <%#Eval("Rg")%></p>
                                                <p>Endereço: <%#Eval("Endereco")%></p>
                                                <p>Cidade: <%#Eval("Cidade")%> - <%#Eval("Uf")%></p>
                                                <p>Descrição: <%#Eval("Descricao")%></p>

                                            </article>
                                        </div>
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger"
                                                    data-dismiss="modal">
                                                Fechar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <span class="badge badge-primary">Primary</span>
                            <span class="badge badge-secondary">Secondary</span>
                            <span class="badge badge-success">Success</span>
                            <span class="badge badge-danger">Danger</span>
                        </div>
                    </div>

                    </ItemTemplate>
                </asp:ListView>

            </div>
        </div>
    </section>

    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT * FROM [tb_pacientes] WHERE ([Dr] = ?) ORDER BY [Nome]">
        <SelectParameters>
            <asp:SessionParameter Name="Dr" SessionField="id" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>

</asp:Content>

