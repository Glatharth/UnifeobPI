import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services/api";
import { Redirect } from "react-router-dom";

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
  },
  btns: {
    display: "flex",
    justifyContent: "space-between"
  },
  cssLabel: {
    "&$cssFocused": {
      color: "black !important"
    }
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "black !important"
    }
  },

  cssFocused: {},
  notchedOutline: {}
}));

export default function PatientCreate(props) {
  const patientsDataEdit = useSelector(state => state.dataEdit);

  // Dados do paciente a ser editado
  const [data, setData] = useState(patientsDataEdit);

  // Cancelando
  function handleCancel(e) {
    e.preventDefault();
    props.history.push("/admin/patients");
  }

  // Editando paciente
  async function handleEdit(e) {
    e.preventDefault();

    await api.put(`/dashboard/patients/${data._id}`, data);

    props.history.push("/admin/patients");
  }

  const dispatch = useDispatch();

  // Apagando paciente
  async function handleDelete(e) {
    e.preventDefault();
    await api.delete(`/dashboard/patients/${data._id}`);
    dispatch({ type: "EDIT_PATIENT", patient: false });
    props.history.push("/admin/patients");
  }

  const classes = useStyles();

  return (
    <>
      {patientsDataEdit ? null : <Redirect to="/admin/patients" />}

      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form}>
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
                  value={data.name}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline
                    }
                  }}
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
                  value={data.age}
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
                  value={data.email}
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
                  onChange={e => setData({ ...data, gravity: e.target.value })}
                  value={data.gravity}
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
                  value={data.cpf}
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
                  value={data.rg}
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
                  value={data.description}
                />
              </Grid>
            </Grid>

            <Grid item xs={10} className={classes.btns}>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
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
                  Editar
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleDelete}
                >
                  Apagar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
