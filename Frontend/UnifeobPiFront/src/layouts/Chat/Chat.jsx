import React, { useState } from 'react';
import './chat.css';

import io from 'socket.io-client';
import $ from 'jquery';

import imgt from '../../images/hermione.jpg';

import EmojisList from '../../components/EmojisList';
import { MdMood, MdKeyboardVoice } from 'react-icons/md';
import { Emoji } from 'emoji-mart';

export default function Chat() {


  var socket = io('http://localhost:3000');

  function renderMessage(message){

    const you = $('#userName').html();
    const outher = message.author;

    if(you === outher){
      $('#mainChat').append(`
        <div class="messageBody">
          <div class="messageMainSender">
            <div class="sender">
              <div class="messageText">
                ${message.message}
              </div>
              <span class="messageTime">
                ${message.author}
              </span>
            </div>
          </div>
        </div>`
      );
    } else {
      $('#mainChat').append(`
        <div class="messageBody">
          <div class="messageMainReceiver">
            <div class="receiver">
              <div class="messageText">
                ${message.message}
              </div>
              <span class="messageTime">
                ${message.author}
              </span>
            </div>
          </div>
        </div>`
      );
    }
  }

  socket.on('previousMessages', (messages) => {
    var message;
    for(message of messages) {
      renderMessage(message);
    }
  });

  socket.on('receivedMessage', (message) => {
    renderMessage(message);
  })

  function chatSubmit(e){
    e.preventDefault();

    var author = $('#userName').html();
    var message = $('input[name=message]').val();

    if(author.length && message.length){
      var messageObject = {
        author: author,
        message: message
        
      };

      renderMessage(messageObject);

      socket.emit('sendMessage', messageObject);
    }
  }

  const [emojis, setEmojis] = useState(EmojisList);

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
              <div className="contactPhoto"></div>
              <div className="contactName"></div>
            </div>
          </div>
        </aside>

      <main id="mainChat">

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
            <input name="message" id="message"></input>
          </div>
          <div className="sendMessageVoice">
            <MdKeyboardVoice id="voiceButton" onClick={chatSubmit} size={35}/>
          </div>
        </footer>

      </div>
    </div>
  );
}
