import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Notifications from "@material-ui/icons/Notifications";
import NoteAdd from "@material-ui/icons/NoteAdd";
import DateRange from "@material-ui/icons/DateRange";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Message from "@material-ui/icons/Message";
import Person from "@material-ui/icons/Person";
import AddComment from "@material-ui/icons/AddComment";
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Link to="/admin/table">
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Assignment />
                </CardIcon>
                <p className={classes.cardCategory}>Formularios</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <NoteAdd />
                  Criar formulario
                </div>
              </CardFooter>
            </Card>
          </Link>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Link to="/admin/patients">
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Person />
                </CardIcon>
                <p className={classes.cardCategory}>Pacientes</p>
                <h3 className={classes.cardTitle}>4</h3>
              </CardHeader>
              <Link to="/admin/patientCreate">
                <CardFooter stats>
                  <div className={classes.stats}>
                    <PersonAdd />
                    Criar paciente
                  </div>
                </CardFooter>
              </Link>
            </Card>
          </Link>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Notifications />
              </CardIcon>
              <p className={classes.cardCategory}>Agenda</p>
              <h3 className={classes.cardTitle}>Evento</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Criar evento
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Message />
              </CardIcon>
              <p className={classes.cardCategory}>Mensages</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AddComment />
                Enviar mensagem
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
