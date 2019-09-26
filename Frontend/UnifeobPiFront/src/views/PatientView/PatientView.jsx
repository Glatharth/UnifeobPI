import React from 'react';

import { Link } from 'react-router-dom';

import './PatientView.css';

export default function PatientCreate() {
  return (
    <div className="patientsView">

      <div className="patientsViewA">
        <div className="patientsViewAName">
          <input placeholder="Nome" type="text" name="patientsViewName" id="patientsViewName"/>
        </div>
        <div className="patientsViewAAge">
          <input placeholder="Idade" type="text" name="patientsViewAge" id="patientsViewAge"/>
        </div>
      </div>

      <div className="patientsViewB">
        <div className="patientsViewBCpf">
          <input placeholder="CPF" type="text" name="patientsViewCpf" id="patientsViewCpf"/>
        </div>
        <div className="patientsViewBRg">
          <input placeholder="RG" type="text" name="patientsViewRg" id="patientsViewRg"/>
        </div>
      </div>

      <div className="patientsViewC">
        <div className="patientsViewCEmail">
          <input placeholder="E-mail" type="text" name="patientsViewEmail" id="patientsViewEmail"/>
        </div>
        <div className="patientsViewCGravity">
          <div className="patientsViewCGravityButton">Gravidade</div>
        </div>
      </div>

      <div className="patientsViewD">
        <div className="patientsViewDDescription">
          <textarea name="patientsViewDescription" id="patientsViewDescription" placeholder="Descrição..."></textarea>
        </div>
      </div>

      <div className="patientsViewE">
        <Link to="/Patients" className="patientsViewEButtons">Cancelar</Link>
        <div className="patientsViewEButtons">Confirmar</div>
      </div>

    </div>
  );
}

