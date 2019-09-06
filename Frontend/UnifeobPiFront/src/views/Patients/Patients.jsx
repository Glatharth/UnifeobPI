import React from 'react';

import {Link} from 'react-router-dom';

import './Patients.css';

export default function patients() {
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

    {/* START MAP */}

    <div className="patientsMainOut">
      <div className="patientsMainBox">
        <img className="patientsMainBoxPhoto"></img>
        <div className="patientsMainBoxItens">
          <div className="patientsMainBoxItensName"><h2>Cesar</h2></div>
          <div className="patientsMainBoxItensDescription"><h4>Sou Cesar como é seu nome</h4></div>
        </div>
        <div className="patientsMainBoxGravityAverage"/>
      </div>
    </div>

    <div className="patientsMainOut">
      <div className="patientsMainBox">
        <img className="patientsMainBoxPhoto"></img>
        <div className="patientsMainBoxItens">
          <div className="patientsMainBoxItensName"><h2>Cesar</h2></div>
          <div className="patientsMainBoxItensDescription"><h4>Sou Cesar como é seu nome</h4></div>
        </div>
        <div className="patientsMainBoxGravityHigh"/>
      </div>
    </div>

    <div className="patientsMainOut">
      <div className="patientsMainBox">
        <img className="patientsMainBoxPhoto"></img>
        <div className="patientsMainBoxItens">
          <div className="patientsMainBoxItensName"><h2>Cesar</h2></div>
          <div className="patientsMainBoxItensDescription"><h4>Sou Cesar como é seu nome</h4></div>
        </div>
        <div className="patientsMainBoxGravityAverage"/>
      </div>
    </div>

    <div className="patientsMainOut">
      <div className="patientsMainBox">
        <img className="patientsMainBoxPhoto"></img>
        <div className="patientsMainBoxItens">
          <div className="patientsMainBoxItensName"><h2>Cesar</h2></div>
          <div className="patientsMainBoxItensDescription"><h4>Sou Cesar como é seu nome</h4></div>
        </div>
        <div className="patientsMainBoxGravityLow"/>
      </div>
    </div>

    {/* END MAP */}
  
    </div>


    </div>

  );
}
