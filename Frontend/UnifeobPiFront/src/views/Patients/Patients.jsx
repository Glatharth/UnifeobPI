import React from 'react';

import {Link} from 'react-router-dom';

import './Patients.css';

export default function patients() {
  return (

    <div id="patients" className="patients">

      <h1>Pacientes</h1>

      <Link to="/PatientCreate"><h2>Criar</h2></Link>

      <h2>Lista de pacientes</h2>

        <Link to="/PatientView">Paciente1</Link>
        <br/>
        <Link to="/PatientView">Paciente2</Link>
        <br/>
        <Link to="/PatientView">Paciente3</Link>
        <br/>
        <Link to="/PatientView">Paciente4</Link>
        <br/>
        <Link to="/PatientView">Paciente5</Link>




    </div>

  );
}
