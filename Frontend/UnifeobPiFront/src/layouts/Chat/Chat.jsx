import React, { useState, useEffect } from 'react';
import './chat.css';

import io from 'socket.io-client';

import imgt from '../../images/user.jpg';

import EmojisList from '../../components/EmojisList';
import { MdMood, MdKeyboardVoice } from 'react-icons/md';
import { Emoji } from 'emoji-mart';

export default function Chat() {

  const [emojis, setEmojis] = useState(EmojisList);

  const [messages, setMessages] = useState([]);

  const [messageInput, setMessageInput] = useState("");

  let socket;

  useEffect(() => {
    socket = io('http://localhost:3000');

    socket.on('connect', () => {
      alert('Conectado');
    })
  
    socket.on('previousMessages', (messages) => {
      setMessages(messages);
    });
  
    socket.on('receivedMessage', (message) => {
      setMessages(messages);
    });
  }, [])

  function readKey(e){
    if(e.keyCode === 13) {
      console.log(e);
      chatSubmit();
    }
  }

  function chatSubmit(){
    if(messageInput.length){

      let messageObject = {
        author: "Cesar",
        message: messageInput,
        hour:"20:30"  
      };

      socket.emit('sendMessage', messageObject);
    }
  }

  return (
    <div className="outChat">
      <div id="chatMain" className="chatConteiner">

        <div className="chatConteinerheader">
          <div className="navbarHeaderPhoto">
            <img src={imgt} alt=""/>
          </div>
          <div className="navbarHeaderTexts">
            <div className="navbarHeaderTextsContact"><h2>Potter</h2></div>
            <div className="navbarHeaderTextsDescription"><h3>Nao é por que acabou que nao foi pra sempre um dia</h3></div>
          </div>
        </div>

        <aside>
          <div className="sidebarHeader">
            <div className="sidebarHeaderPhoto">
              <img src={imgt} alt=""/>
            </div>
            <div className="sidebarHeaderName">
            <h2 id="userName">Cesar</h2>
            </div>
          </div>
          <div className="sidebarSearch">
            <input maxLength="14" placeholder="Pesquisar..." type="text" name="" id=""/>
          </div>
          <div className="sidebarContacts">

            <div className="boxContact">
              <div className="contactPhoto"><img src={imgt} alt=""/></div>
              <div className="contactName">Potter</div>
            </div>

            <div className="boxContact">
              <div className="contactPhoto"><img src={imgt} alt=""/></div>
              <div className="contactName">Claudio</div>
            </div>

          </div>

        </aside>

      <main id="mainChat">
       {
         messages.map(msg => (
           <h2>{msg.message}</h2>
         ))
       }
      </main>

        <div id="boxEmojis" className="boxEmojisClose">
        {emojis.map( emj => (
          <div>
          <Emoji size={35} key={emj.id} emoji={emj.name} set='twitter' skin={2}/>
          </div>
        ))}
        </div>

        <footer>
          <div className="sendMessageEmoji">
            <MdMood id="emojiButton" size={35}/>
          </div>
          <div className="sendMessageText">
            <input 
                onKeyDown={readKey}
                onChange={e => setMessageInput(e.target.value)}
                name="message" id="message"
                value={messageInput}
            />
          </div>
          <div className="sendMessageVoice">
            <MdKeyboardVoice id="voiceButton" size={35}/>
          </div>
        </footer>

      </div>
    </div>
  );
}
