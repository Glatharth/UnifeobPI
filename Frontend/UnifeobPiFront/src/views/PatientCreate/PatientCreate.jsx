import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import './PatientCreate.css';

export default function PatientCreate(props) {

  const [data, setData] = useState({})

  async function handleSubmit(e){
    e.preventDefault()

    const response = await api.post('/dashboard/patients', data)

    props.history.push("/admin/Patients");
  }

  return (

    <form method="post" action="" onSubmit={handleSubmit}> 

      <div className="patientsCreate">

        <div className="patientsCreateA">
          <div className="patientsCreateAName">
            <input placeholder="Nome" type="text"
            name="patientsCreateName" id="patientsCreateName"
            onChange={e=> setData({...data, name: e.target.value})}
            />
          </div>
          <div className="patientsCreateAAge">
            <input placeholder="Idade" type="text"
            name="patientsCreateAge" id="patientsCreateAge"
            onChange={e=> setData({...data, age: e.target.value})}
            />
          </div>
        </div>

        <div className="patientsCreateB">
          <div className="patientsCreateBCpf">
            <input placeholder="CPF" type="text" 
            name="patientsCreateCpf" id="patientsCreateCpf"
            onChange={e=> setData({...data, cpf: e.target.value})}
            />
          </div>
          <div className="patientsCreateBRg">
            <input placeholder="RG" type="text" 
            name="patientsCreateRg" id="patientsCreateRg"
            onChange={e=> setData({...data, rg: e.target.value, password: e.target.value})}
            />
          </div>
        </div>

        <div className="patientsCreateC">
          <div className="patientsCreateCEmail">
            <input placeholder="E-mail" type="text" 
            name="patientsCreateEmail" id="patientsCreateEmail"
            onChange={e=> setData({...data, email: e.target.value})}
            />
          </div>
          <div className="patientsCreateCGravity">
            <div className="patientsCreateCGravityButton">Gravidade</div>
          </div>
        </div>

        <div className="patientsCreateD">
          <div className="patientsCreateDDescription">
            <textarea placeholder="Descrição..." 
            name="patientsCreateDescription" id="patientsCreateDescription"
            onChange={e=> setData({...data, description: e.target.value})}
            />
          </div>
        </div>

        <div className="patientsCreateE">
          <Link to="/admin/Patients" className="patientsCreateEButtons">Cancelar</Link>
          <input className="patientsCreateEButtons" type="submit" value="Confirmar" /> 
        </div>

      </div>

    </form>
  );
}
