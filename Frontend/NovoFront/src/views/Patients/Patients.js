import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// API
import api from "../../services/api";

import teste from "../../assets/img/tim_80x80.png";
import { makeStyles } from "@material-ui/core/styles";

// Apagar
import Person from "@material-ui/icons/Person";
import AssignmentInd from "@material-ui/icons/AssignmentInd";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

export default function Patients(props) {
  // Buscar pacientes na API
  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/dashboard/patients/");
      setPatientsData(response.data.patients);
    }
    fetchData();
  }, []);

  const patientsData = useSelector(state => state.data);
  const dispatch = useDispatch();

  function setPatientsData(patients) {
    dispatch({ type: "SET_PATIENT", patients: patients });
  }

  function setPatientsDataEdit(patient) {
    dispatch({ type: "EDIT_PATIENT", patient: patient });
    props.history.push("/admin/patientEdit");
  }

  const classes = useStyles();

  return (
    <GridContainer>
      {patientsData.map(patient => (
        <GridItem xs={12} sm={6} md={6} key={patient._id}>
          <Card
            onClick={() => setPatientsDataEdit(patient)}
            style={{ cursor: "pointer" }}
          >
            <CardHeader color="warning" stats icon>
              <CardIcon color="danger">
                <Person />
              </CardIcon>
              <p className={classes.cardCategory}>{patient.name}</p>
              <h6 className={classes.cardTitle}>{`${patient.age} anos`}</h6>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AssignmentInd />
                {patient.gravity}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </GridContainer>
  );
}
