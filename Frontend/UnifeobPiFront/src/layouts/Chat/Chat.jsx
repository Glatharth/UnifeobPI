import React, { useState } from 'react';

import './chat.css';

import imgt from '../../images/hermione.jpg';

import abc from '../../components/EmojisList'

import { MdMood, MdKeyboardVoice } from 'react-icons/md';

import { Emoji } from 'emoji-mart'

export default function Chat() {

  const [emojis, setEmojis] = useState(abc)

  return (
    <div className="outChat">
      <div className="chatConteinerEmojis">

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

        <div className="boxEmojis">
        {emojis.map( emj => (
          <Emoji size={35} key={emj.id} emoji={emj.name} set='twitter' skin={2}/>
        ))}
        </div>

        <footer>
          <div className="sendMessageEmoji">
            <MdMood id="emojiNutton" size={35}></MdMood>
          </div>
          <div className="sendMessageText"></div>
          <div className="sendMessageVoice">
            <MdKeyboardVoice id="voiceButton" size={35}/>
          </div>
        </footer>

      </div>
    </div>
  );
}
