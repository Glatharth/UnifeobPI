import React, { useState, useEffect } from 'react';

// API
import api from '../../services/api';

import teste from '../../assets/img/login.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  out: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  card: {
    display: 'flex',
    width: '45%',
    marginTop: '20px',
    cursor: 'pointer'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
}));

export default function Patients() {

  // Pacientes
  const [patients, setPatients] = useState([]);

  // Buscar pacientes na API
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/dashboard/patients/');
      setPatients(response.data.patients);
    }
    fetchData();
  }, [patients])

  const classes = useStyles();
  return (
    <>
      <div className={classes.out}>

        {patients.map(pt => (
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              title={pt.name}
              image={teste}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography>
                  {pt.name}
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {pt.description}
          </Typography>
              </CardContent>
            </div>
          </Card>
        ))}

      </div>
    </>
  );
}
