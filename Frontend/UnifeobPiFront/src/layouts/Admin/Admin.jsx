import React, { useState } from 'react';

import './admin.css';

import { getCompany } from '../../services/auth';

import { Switch, Route, Link, Redirect} from 'react-router-dom';

import Dashboard from '../../views/Dashboard/Dashboard';
import Patients from '../../views/Patients/Patients';
import PatientCreate from '../../views/PatientCreate/PatientCreate';
import TableList from '../../views/TableList/TableList';
import Icons from '../../views/Icons/Icons';
import Maps from '../../views/Maps/Maps';
import Notifications from '../../views/Notifications/Notifications';

export default function Admin() {

  const [menus, setmenus] = useState([
    { page: "Dashboard", url:"Dashboard", name: "DASHBOARD", selected: "selected"},
    { page: "Pacientes", url:"Patients", name: "PACIENTES" },
    { page: "Table List", url:"TableList", name: "TABLE LIST" },
    { page: "Icons", url:"Icons", name: "ICONS" },
    { page: "Maps", url:"Maps", name: "MAPS" },
    { page: "Notifications", url:"Notifications", name: "NOTIFICATIONS" }
  ])

  const [company, setCompany] = useState(getCompany)

  function selected(name, page){

    document.querySelector('#Page').innerHTML = page;
    
    const newMenu = menus.map(menu => {

      // eslint-disable-next-line
      menus.map(menu => {
        menu.selected = 'noSelected';
      })

      return menu.name === name ? {...menu, selected: 'selected'} : menu
    });

    setmenus(newMenu);
  };

  return (
    <div id="conteiner" className="conteiner">

      <header>

        <div>
          <h1 id="Page" >Dashboard</h1>
        </div>

        <div>

        <div className="dropdown">
          <button className="dropbtn" id="dropdown">Botao</button>
          <div id="dropCont" className="dropdown-content">
            <li>Perfil</li>
            <li>Sobre</li>
            <li>Ticket</li>
            <li>Sair</li>
          </div>
        </div>

        </div>

      </header>

      <aside id="aside" className="aside">
        <div className="menu" id="menuTitle">
          <h1>{company}</h1>
        </div>

        <ul>
          {menus.map(menu => (
            <Link key={menu.name} onClick={() => selected(menu.name, menu.page)} to={`/admin/${menu.url}`}>
              <li key={menu.name} className={menu.selected} >{menu.name}</li>
            </Link>
          ))
          }
        </ul>

      </aside>

      <main>
          <Switch>
            <Route exact path="/admin" component={Dashboard}></Route>
            <Route path="/admin/Dashboard" component={Dashboard}></Route>
            <Route path="/admin/Patients" component={Patients}></Route>
            <Route path="/admin/PatientCreate" component={PatientCreate}></Route>
            <Route path="/admin/TableList" component={TableList}></Route>
            <Route path="/admin/Icons" component={Icons}></Route>
            <Route path="/admin/Maps" component={Maps}></Route>
            <Route path="/admin/Notifications" component={Notifications}></Route>
          </Switch>
      </main>


    </div>
  );
}
