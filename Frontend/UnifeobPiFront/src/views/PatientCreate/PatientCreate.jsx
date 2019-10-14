import React, { useState } from 'react';
import './PatientCreate.css';

// Componentes de rota
import { Link } from 'react-router-dom';

// API
import api from '../../services/api';

export default function PatientCreate(props) {

  // Dados do paciente a ser criado
  const [data, setData] = useState({})

  // Criando paciente
  async function handleSubmit(e){
    e.preventDefault()

    await api.post('/dashboard/patients', data)

    props.history.push("/admin/Patients");
  }

  return (

    <form method="post" action="" onSubmit={handleSubmit}> 

      <div className="patientsCreate">

        <div className="patientsCreateA">
          <div className="patientsCreateAName">
            <input placeholder="nome" type="text"
            name="patientsCreateName" id="patientsCreateName"
            onChange={e=> setData({...data, name: e.target.value})}
            />
          </div>
          <div className="patientsCreateAAge">
            <input placeholder="data de nascimento" type="date"
            name="patientsCreateAge" id="patientsCreateAge"
            onChange={e=> setData({...data, age: e.target.value})}
            />
          </div>
        </div>

        <div className="patientsCreateB">
          <div className="patientsCreateBCpf">
            <input placeholder="cpf" type="text" 
            name="patientsCreateCpf" id="patientsCreateCpf"
            onChange={e=> setData({...data, cpf: e.target.value})}
            />
          </div>
          <div className="patientsCreateBRg">
            <input placeholder="rg" type="text" 
            name="patientsCreateRg" id="patientsCreateRg"
            onChange={e=> setData({...data, rg: e.target.value, password: e.target.value})}
            />
          </div>
        </div>

        <div className="patientsCreateC">
          <div className="patientsCreateCEmail">
            <input placeholder="E-mail" type="email" 
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
            <textarea placeholder="descrição..." 
            name="patientsCreateDescription" id="patientsCreateDescription"
            onChange={e=> setData({...data, description: e.target.value})}
            />
          </div>
        </div>

        <div className="patientsCreateE">
          <Link to="/admin/Patients" id="patientsCreateCancel" className="patientsCreateEButtons">Cancelar</Link>
          <input id="patientsCreateConfirm" className="patientsCreateEButtons" type="submit" value="Confirmar" /> 
        </div>

      </div>

    </form>
  );
}