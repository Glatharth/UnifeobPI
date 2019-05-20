using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

public partial class MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {

        string nome = "";
        nome = "" + Session["id"];

        ButtonUsu.Text = "♞ " + nome;
    }

    protected void Sair_Click1(object sender, EventArgs e)
        FormsAuthentication.SignOut();
        Session.Abandon();
        Session.Clear();

    }

}
