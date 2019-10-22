import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// API
import api from "../../services/api";

import teste from "../../assets/img/login.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  out: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    display: "flex",
    width: "45%",
    marginTop: "20px",
    cursor: "pointer"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 100
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
}));

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
    <>
      <div className={classes.out}>
        {patientsData.map(patient => (
          <Card
            className={classes.card}
            key={patient._id}
            onClick={() => setPatientsDataEdit(patient)}
          >
            <CardMedia
              className={classes.cover}
              title={patient.name}
              image={teste}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography>{patient.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {patient.description}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
