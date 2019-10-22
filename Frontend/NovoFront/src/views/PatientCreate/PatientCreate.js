import React, { useState } from "react";

import api from "../../services/api";

// Formulario
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0)
  },
  submit: {
    margin: theme.spacing(3, 0, 1)
  },
  txtarea: {
    width: "100%",
    fontSize: "20px"
  }
}));

export default function PatientCreate(props) {
  // Dados do paciente a ser criado
  const [data, setData] = useState({});

  // Criando paciente
  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/dashboard/patients", data);

    props.history.push("/admin/Patients");
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm={5}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Nome"
                autoFocus
                onChange={e => setData({ ...data, name: e.target.value })}
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextField
                autoComplete="age"
                name="age"
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Idade"
                onChange={e => setData({ ...data, age: e.target.value })}
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                onChange={e => setData({ ...data, email: e.target.value })}
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gravity"
                label="Gravidade"
                name="gravity"
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpf"
                label="CPF"
                type="cpf"
                id="cpf"
                onChange={e => setData({ ...data, cpf: e.target.value })}
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="rg"
                label="RG"
                type="rg"
                id="rg"
                onChange={e =>
                  setData({
                    ...data,
                    rg: e.target.value,
                    password: e.target.value
                  })
                }
              />
            </Grid>

            <Grid item xs={10}>
              <TextareaAutosize
                className={classes.txtarea}
                xs={10}
                aria-label="minimum height"
                rows={7}
                placeholder="Descrição..."
                onChange={e =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <Grid item xs={10}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
