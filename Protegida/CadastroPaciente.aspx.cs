using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

public partial class Protegida_Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        faz_cadastroPaciente();
    }

    private void faz_cadastroPaciente()
    {
        if (TextNome.Text != "" && TextSexo.Text != "" && TextIdade.Text != "" && TextCpf.Text != "" && TextRg.Text != "" && TextTelefone.Text != "" && TextEmail.Text != "" && TextCidade.Text != "" && TextBoxUf.Text != "" && TextEndereco.Text != "" && TextDescricao.Text != "")
        {

            string dr = (Session["id"]).ToString();
                 
                 string comando = "INSERT INTO [tb_pacientes] ( [Nome], [Sexo], [Idade], [Cpf], [Rg], [Telefone], [Email], [Cidade], [Uf], [Endereco], [Descricao], [Dr]) VALUES ('" + TextNome.Text + "','" + TextSexo.Text + "','" + TextIdade.Text + "','" + TextCpf.Text + "','" + TextRg.Text + "','" + TextTelefone.Text + "','" + TextEmail.Text + "','" + TextCidade.Text + "','" + TextBoxUf.Text + "','" + TextEndereco.Text + "','" + TextDescricao.Text + "','" + dr + "')";

                SqlDataSource1.InsertCommand = comando;
                SqlDataSource1.Insert();

                Response.Redirect("~/Protegida/Pacientes.aspx", true); 
            
        }

        else
        {

        }
    }

}