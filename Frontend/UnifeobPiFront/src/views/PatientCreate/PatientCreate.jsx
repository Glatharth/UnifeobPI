import React from 'react';

import { Link } from 'react-router-dom';

import './PatientCreate.css';

export default function PatientCreate() {
  return (
    <div className="patientsCreate">

      <div className="patientsCreateA">
        <div className="patientsCreateAName">
          <input placeholder="Nome" type="text" name="patientsCreateName" id="patientsCreateName"/>
        </div>
        <div className="patientsCreateAAge">
          <input placeholder="Idade" type="text" name="patientsCreateAge" id="patientsCreateAge"/>
        </div>
      </div>

      <div className="patientsCreateB">
        <div className="patientsCreateBCpf">
          <input placeholder="CPF" type="text" name="patientsCreateCpf" id="patientsCreateCpf"/>
        </div>
        <div className="patientsCreateBRg">
          <input placeholder="RG" type="text" name="patientsCreateRg" id="patientsCreateRg"/>
        </div>
      </div>

      <div className="patientsCreateC">
        <div className="patientsCreateCEmail">
          <input placeholder="E-mail" type="text" name="patientsCreateEmail" id="patientsCreateEmail"/>
        </div>
        <div className="patientsCreateCGravity">
          <div className="patientsCreateCGravityButton">Gravidade</div>
        </div>
      </div>

      <div className="patientsCreateD">
        <div className="patientsCreateDDescription">
          <textarea name="patientsCreateDescription" id="patientsCreateDescription" placeholder="Descrição..."></textarea>
        </div>
      </div>

      <div className="patientsCreateE">
        <Link to="/Patients" className="patientsCreateEButtons">Cancelar</Link>
        <div className="patientsCreateEButtons">Confirmar</div>
      </div>

    </div>
  );
}
