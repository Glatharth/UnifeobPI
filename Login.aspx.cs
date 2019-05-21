using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Data;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void ButtonLogin_Click(object sender, EventArgs e)
    {

        faz_login();
    }

    private void faz_login()
    {
        //verificar se preencheu os textbox
        if (TextBoxEmail.Text != "" && TextBoxSenha.Text != "")
        {
            //criar o comando select
            string cmd = "SELECT * FROM tb_usuario WHERE Email = '" +
                TextBoxEmail.Text + "' AND Senha = '" + TextBoxSenha.Text + "'";

            //execuar o camando
            SqlDataSource1.SelectCommand = cmd;

            //pegando os valores do banco em variaveis
            string email = "";
            string senha = "";
            string nome = "";

            //converte o resultado do Select em um DATAVIEW
            DataView dv = (DataView)SqlDataSource1.Select(DataSourceSelectArguments.Empty);
            foreach (DataRow row in dv.Table.Rows)
            {
                email = row["Email"].ToString();
                senha = row["Senha"].ToString();
                nome = row["Nome"].ToString();
            }
            //verificar se o nome e a senha estão corretos
            if (TextBoxEmail.Text == email && TextBoxSenha.Text == senha)
            {

                Session["id"] = nome; //Nome do Usuario

                //autenticar o usuario (importar o System.Web.Security)

                FormsAuthentication.RedirectFromLoginPage(TextBoxEmail.Text, true);
                Response.Redirect("~/Protegida/Default.aspx", true);
            }

            else
            {
                
            }

        }

        else
        {
            
        }

    }
}