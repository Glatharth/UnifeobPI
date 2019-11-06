import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Imagem
import img from '../../images/user.jpg';

// Api 
import api from '../../services/api';

import { getPatient } from "../../services/auth"

// Formulario
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.9)"
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 1)
  },
  txtarea: {
    width: "100%",
    fontSize: "20px"
  },
  btns: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: "19px"
  },
  bigAvatar: {
    margin: 30,
    width: 110,
    height: 110,
  },
}));

export default function Profile(props) {

  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/dashboard/patients/${getPatient()}`);
      setData(response.data.patient);
    }
    fetchData();
  }, []);

  // Editando paciente
  async function handleEdit(e) {
    e.preventDefault();

    localStorage.setItem('@admin-NameChat', data.nameChat);

    await api.put(`/dashboard/patients/${data._id}`, data);

    props.history.push("/");
  }

  return (

    <div className={classes.main}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form}>
            <Avatar alt="img" src={img} className={classes.bigAvatar} />
            <Grid className={classes.center} container spacing={2}>

              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  label="E-mail"
                  type="email"
                  id="email"
                  value={`${data.email}`}
                  onChange={e => setData({ ...data, email: e.target.value })}
                />
              </Grid>

              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="nameChat"
                  label="Nome no Chat"
                  id="nameChat"
                  value={data.nameChat === undefined ? " " : `${data.nameChat}`}
                  onChange={e => setData({ ...data, nameChat: e.target.value })}
                />
              </Grid>

              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  label="Nome"
                  type="name"
                  id="name"
                  disabled
                  value={`${data.name}`}
                />
              </Grid>

              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="age"
                  label="Data de Nascimento"
                  type="data"
                  id="age"
                  disabled
                  value={`${data.age}`}
                />
              </Grid>

              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="cpf"
                  id="cpf"
                  disabled
                  value={`${data.cpf}`}
                />
              </Grid>

              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="rg"
                  label="RG"
                  type="rg"
                  id="rg"
                  disabled
                  value={`${data.rg}`}
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
                    setData({ ...data, descriptionChat: e.target.value })
                  }
                  value={`${data.descriptionChat ? data.descriptionChat : ''}`}
                />
              </Grid>
            </Grid>

            <Grid item xs={10} className={classes.btns}>
              <Grid item xs={3}>
                <Link to="/">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={e => e.preventDefault}
                  >
                    Cancelar
                </Button>
                </Link>
              </Grid>

              <Grid item xs={3}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleEdit}
                >
                  Alterar
                </Button>
              </Grid>

            </Grid>
          </form>
        </div>
      </Container>

    </div>

  );
}
