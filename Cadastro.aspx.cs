using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

public partial class Cadastro : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void ButtonCadastrar_Click(object sender, EventArgs e)
    {
        faz_cadastro();
    }

    private void faz_cadastro()
    {
        if(TextBoxNomeCad.Text != "" && TextBoxEmailCad.Text != "" && TextBoxSenhaCad.Text != "" && TextBoxSenha2Cad.Text != "")
        {
            if(TextBoxSenhaCad.Text == TextBoxSenha2Cad.Text)
            {
                string comando = "INSERT INTO [tb_usuario] ( [Nome], [Email], [Senha]) VALUES ('" + TextBoxNomeCad.Text + "','" + TextBoxEmailCad.Text + "','" + TextBoxSenhaCad.Text + "')";

                SqlDataSource1.InsertCommand = comando;
                SqlDataSource1.Insert();

                string nome = TextBoxNomeCad.Text;
                Session["id"] = nome;

                FormsAuthentication.RedirectFromLoginPage(TextBoxEmailCad.Text, true);
                Response.Redirect("~/Protegida/Default.aspx", false);
            }

            else
            {
                DivLabel2.Style["Display"] = "block";
                LabelMsg2.Text = "Senhas diferentes!";
            }
        }

        else
        {
            DivLabel2.Style["Display"] = "block";
            LabelMsg2.Text = "Preencha todos os campos!";
        }
    }
}