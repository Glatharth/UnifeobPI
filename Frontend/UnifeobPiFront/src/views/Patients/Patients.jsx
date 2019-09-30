import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

import './Patients.css';

import api from '../../services/api';

export default function Patients() {

  const [control, setControl] = useState("")

  const [data, setData] = useState([]);

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const response = await api.get('/dashboard/patients/');
    setPatients(response.data.patients);
    }
    fetchData();
  }, [control])

  function patientSelected(pt){
    setData(pt);

    document.querySelector('#formPatients').style.display = 'none';
    document.querySelector('#formPatient').style.display = 'block';
  }

  function cancel(){
    document.querySelector('#formPatients').style.display = 'block';
    document.querySelector('#formPatient').style.display = 'none';
  }

  function alterPatient(e){
    e.preventDefault();

    const response = api.put(`/dashboard/patients/${data._id}`, data);
    setControl(control + 1);
    cancel();
  }

  return (
    <>

    <form id="formPatients" method="post" action="">

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
            <div className="patientsMainBox" onClick={() => patientSelected(pt)}>
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

    </form>

{/* Patient View */}

<form id="formPatient" method="post" action="">

<div className="patientsView">

<div className="patientsViewA">
  <div className="patientsViewAName">
    <input placeholder="Nome" type="text" 
    name="patientsViewName" id="patientsViewName"
    onChange={e=> setData({...data, name: e.target.value})}
    value={data.name}
    />
  </div>
  <div className="patientsViewAAge">
    <input placeholder="Idade" type="text" 
    name="patientsViewAge" id="patientsViewAge"
    onChange={e=> setData({...data, age: e.target.value})}
    value={data.age}
    />
  </div>
</div>

<div className="patientsViewB">
  <div className="patientsViewBCpf">
    <input placeholder="CPF" type="text" 
    name="patientsViewCpf" id="patientsViewCpf"
    onChange={e=> setData({...data, cpf: e.target.value})}
    value={data.cpf}
    />
  </div>
  <div className="patientsViewBRg">
    <input placeholder="RG" type="text"
     name="patientsViewRg" id="patientsViewRg"
     onChange={e=> setData({...data, rg: e.target.value})}
     value={data.rg}
     />
  </div>
</div>

<div className="patientsViewC">
  <div className="patientsViewCEmail">
    <input placeholder="E-mail" type="text" 
    name="patientsViewEmail" id="patientsViewEmail"
    onChange={e=> setData({...data, email: e.target.value})}
    value={data.email}
    />
  </div>
  <div className="patientsViewCGravity">
    <div className="patientsViewCGravityButton">Gravidade</div>
  </div>
</div>

<div className="patientsViewD">
  <div className="patientsViewDDescription">
    <textarea placeholder="Descrição..." 
    name="patientsViewDescription" id="patientsViewDescription"
    onChange={e=> setData({...data, description: e.target.value})}
    value={data.description}
    />
  </div>
</div>

<div className="patientsViewE">

  <div className="patientsViewEOption">
    <div className="patientsViewEButtonA" onClick={cancel} >Cancelar</div>
  </div>

  <div className="patientsViewEOption">
      <div className="patientsViewEButtonB" >Apagar</div>
  </div>

  <div className="patientsViewEOption">
    <div className="patientsViewEButtonC" onClick={alterPatient} >Alterar</div> 
  </div>

  

  
</div>

</div>

</form>

  </>
  );
}
