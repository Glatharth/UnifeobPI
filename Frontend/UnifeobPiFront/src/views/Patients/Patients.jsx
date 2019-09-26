import React, { useState } from 'react';

import {Link} from 'react-router-dom';

import './Patients.css';

import PatiensList from '../../components/PatientsList.json';

export default function Patients() {

  const [patients, setPatients] = useState(PatiensList);

  return (

    <div id="patients" className="patients">

     <div className="patientsHeader">

       <div className="patientsBoxSearch">
        <input type="text" name="search" id="search" />
       </div>

       <div className="patientsBoxButtons">
        <div className="patientsButtons">A - Z</div>
        <div className="patientsButtons">Gravidade</div>

        <Link to="PatientCreate">
          <div className="patientsButtons">Novo Paciente</div>
        </Link>
       
       </div>

     </div>

    <div className="patientsMain">

    {patients.map( pt => (
            <div key={pt.name} className="patientsMainOut">
            <div className="patientsMainBox">
              <img className="patientsMainBoxPhoto"></img>
              <div className="patientsMainBoxItens">
                <div className="patientsMainBoxItensName"><h2>{pt.name}</h2></div>
                <div className="patientsMainBoxItensDescription"><h4>{pt.description}</h4></div>
              </div>
              <div className={`patientsMainBoxGravity${pt.gravity}`}/>
            </div>
          </div>
    ))}

    </div>


    </div>

  );
}
