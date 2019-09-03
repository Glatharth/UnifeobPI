import React, { useState } from 'react';

import './admin.css';

import { Switch, Route, Link} from 'react-router-dom';

import Dashboard from '../../views/Dashboard/Dashboard';
import Pacientes from '../../views/Pacientes/Pacientes';
import TableList from '../../views/TableList/TableList';
import Icons from '../../views/Icons/Icons';
import Maps from '../../views/Maps/Maps';
import Notifications from '../../views/Notifications/Notifications';

export default function Admin() {

  const [menus, setmenus] = useState([
    { page: "Dashboard", url:"Dashboard", name: "DASHBOARD", selected: "selected"},
    { page: "Pacientes", url:"Pacientes", name: "PACIENTES" },
    { page: "Table List", url:"TableList", name: "TABLE LIST" },
    { page: "Icons", url:"Icons", name: "ICONS" },
    { page: "Maps", url:"Maps", name: "MAPS" },
    { page: "Notifications", url:"Notifications", name: "NOTIFICATIONS" }
  ])

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
          <h1 id="Page">Dashboard</h1>
        </div>

        <div>

        <div class="dropdown">
          <button class="dropbtn" id="dropdown">Botao</button>
          <div id="dropCont" class="dropdown-content">
            <a>Perfil</a>
            <a>Sobre</a>
            <a>Ticket</a>
            <a>Sair</a>
          </div>
        </div>

        </div>

      </header>

      <aside id="aside" className="aside">
        <div className="menu" id="menuTitle">
          <h1>Psicotec</h1>
        </div>

        <ul>
          {menus.map(menu => (
            <Link onClick={() => selected(menu.name, menu.page)} to={`/${menu.url}`}>
              <li className={menu.selected} >{menu.name}</li>
            </Link>
          ))
          }
        </ul>

      </aside>

      <main>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route path="/Pacientes" component={Pacientes}></Route>
            <Route path="/TableList" component={TableList}></Route>
            <Route path="/Icons" component={Icons}></Route>
            <Route path="/Maps" component={Maps}></Route>
            <Route path="/Notifications" component={Notifications}></Route>
          </Switch>
      </main>


    </div>
  );
}
