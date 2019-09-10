import React from 'react';

import './chat.css';

import imgt from '../../images/hermione.jpg';

import { MdMood, MdKeyboardVoice } from 'react-icons/md';

export default function Chat() {
  return (
    
    <div className="chatConteiner">

      <div className="chatConteinerheader">
        <div className="navbarHeaderPhoto">
          <img src={imgt} alt=""/>
        </div>
        <div className="navbarHeaderTexts">
          <div className="navbarHeaderTextsContact"><h2>Cesar</h2></div>
          <div className="navbarHeaderTextsDescription"><h3>alem do horizonte</h3></div>
        </div>
      </div>

      <aside>
        <div className="sidebarHeader">
          <div className="sidebarHeaderPhoto">
            <img src={imgt} alt=""/>
          </div>
          <div className="sidebarHeaderName">
            <h2>Cesar</h2>
          </div>
        </div>
        <div className="sidebarSearch">
          <input maxLength="14" placeholder="Pesquisar..." type="text" name="" id=""/>
        </div>
        <div className="sidebarContacts"></div>
      </aside>

      <main>

      </main>

      <footer>
        <div className="sendMessageEmoji">
          <MdMood size={35}></MdMood>
        </div>
        <div className="sendMessageText"></div>
        <div className="sendMessageVoice">
          <MdKeyboardVoice size={35}/>
        </div>
      </footer>

    </div>
  );
}
