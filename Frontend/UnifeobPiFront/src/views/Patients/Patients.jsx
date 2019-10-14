import React, { useState, useEffect } from 'react';
import './Patients.css';

// Componentes de rota
import { Link } from 'react-router-dom';

// API
import api from '../../services/api';

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

  // Paciente selecionado
  const [data, setData] = useState([]);

  // Selecionar paciente
  function patientSelected(pt){
    setData(pt);

    document.querySelector('#formPatients').style.display = 'none';
    document.querySelector('#formPatient').style.display = 'block';
  }

  // Voltar para todos os pacientes
  function cancel(){
    document.querySelector('#formPatients').style.display = 'block';
    document.querySelector('#formPatient').style.display = 'none';
  }

  // Atualizando dados do paciente selecionado
  async function alterPatient(e){
    e.preventDefault();

    const response  = await api.put(`/dashboard/patients/${data._id}`, data);

    const { patient } = response.data

    const newPatients = patients.map(p => {
      if (p._id === patient._id) {
        return patient;
      }

      return p;
    })

    setPatients(newPatients)

    cancel();
  }

  // Confirmando exclusao do paciente
  function delectConfirm(e){
    e.preventDefault();

    document.querySelector('#outDelet').style.display = "flex";
  }

  // Fechar caixa de confirmacao
  function closeBoxDelet(){
    document.querySelector('#outDelet').style.display = "none";
   }

  // Apagando o paciente selecionado
  async function deletePatient(){

    await api.delete(`/dashboard/patients/${data._id}`);

    closeBoxDelet();
    cancel();
  }

  return (
  <>

    <div id="formPatients">

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
                      <img className="patientsMainBoxPhoto" alt=""></img>
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

    </div>


  {/* Patient View */}

  <div id="outDelet">

    <div className="boxDelet">

      <div className="boxDeletMessage">
        <h2>
          Deseja mesmo apagar esse paciente?
        </h2>
      </div>

      <div className="boxDeletButtons">
        <div className="btnDeletCancel" onClick={closeBoxDelet}>
          <h4>
            Cancelar
          </h4>
        </div>
        <div className="btnDeletConfirm" onClick={deletePatient}>
          <h4>
            Confirmar
          </h4>
        </div>
      </div>

    </div>

  </div>

  <div id="formPatient" method="post" action="">

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
            <div className="patientsViewEButtonB" onClick={delectConfirm}>Apagar</div>
        </div>

        <div className="patientsViewEOption">
          <div className="patientsViewEButtonC" onClick={alterPatient} >Alterar</div> 
        </div>

      </div>

    </div>

  </div>

  </>
  );
}
