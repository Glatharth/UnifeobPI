import React, { useState, useEffect, useMemo } from 'react';

// Emojis
import Emojify , {emojify} from 'react-emojione';
import EmojisEmoji from './Emojis/EmojisListEmoji.json';
import EmojisNature from './Emojis/EmojisListNature.json';
import EmojisFood from './Emojis/EmojisListFood.json';

// Api 
import api from '../../services/api';

// Css
import './styles.css';

// Dados necessarios
import { logout, getPatient, getName } from '../../services/auth';

// Icones
import { MdMood, MdKeyboardVoice, MdInsertEmoticon, MdFace, MdFavoriteBorder, MdPets, MdRestaurant, MdMap } from 'react-icons/md';


// Imagens
import imgt from './../../images/user.jpg'

// Socket
import socketio from 'socket.io-client';

export default function Chat({ history }) {

  // eslint-disable-next-line
  const [emojisEmoji, setEmojisEmoji] = useState(EmojisEmoji);

  // eslint-disable-next-line
  const [name, setName] = useState(getName);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState();
  const [contacts, setContacts] = useState([]);
  const [privy, setPrivy] = useState([]);

  const [emjBtn, setEmjBtn] = useState([
    {emojiOption: <MdInsertEmoticon size={35}/>},
    {emojiOption: <MdFace size={35}/>},
    {emojiOption: <MdFavoriteBorder size={35}/>},
    {emojiOption: <MdPets size={35}/>},
    {emojiOption: <MdRestaurant size={35}/>},
    {emojiOption: <MdMap size={35}/>}
  ])

  function contactSelected(contact){
    setPrivy(contact);
  }

  useEffect(() => {
    async function fetchData() {
    const response = await api.get('/dashboard/patients/');
    setContacts(response.data.patients);
    }
    fetchData();
  }, [contacts])

  const patient_id = getPatient();
  const socket = useMemo(() => socketio('http://localhost:3000', {
    query: { patient_id }
  }), [patient_id]);

  useEffect(() => {
    socket.on('previousMessages', data => {
      setMessages(data);
    })

  }, [messages, socket]);

  socket.on('receivedMessage', data => {
    setMessages([...messages, data]);
  })

  function logOut(){
    logout();
    history.push('/');
  }

  function readKey(e){
    if(e.keyCode === 13) {
      console.log(e);
      chatSubmit();
    }
  }

  function chatSubmit(){
    if(messageInput.length){

      let messageObject = {
        author: "Name",
        message: messageInput,
        hour: calcHour(),
        author_id: patient_id
      };

      setMessages([...messages, messageObject]);

      socket.emit('sendMessage', messageObject);

      setMessageInput("");
    }
  }

  // Outras funcoes

  // Calcular formatar hora da mensagem
  function calcHour(){

    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();

    if(minutes < 10){
      minutes = `0${minutes}`;
    }

    if(hours < 6){
        return(`${hours}:${minutes} da madrugada`)
    }

    else if(hours < 12){
        return(`${hours}:${minutes} da manha`)
    }

    else if(hours < 18){

        if(hours > 12){hours = hours - 12};

        return(`${hours}:${minutes} da tarde`)
    }

    else if(hours <= 24 ){
        hours = hours - 12
        return(`${hours}:${minutes} da noite`)
    }
  }


  const confEmojis = {
    style: {
      height: 35,
      width: 35,
    }
  }

  return (
    <div className="outChat">
      <div id="chatMain" className="chatConteinerEmojis">

        <div className="chatConteinerheader">
          <div className="navbarHeaderPhoto">
            <img id="contactPhoto" src={imgt} alt=""/>
          </div>
          <div className="navbarHeaderTexts">
            <div id="contactName" className="navbarHeaderTextsContact"><h2>{privy.name}</h2></div>
            <div id="contactDescription" className="navbarHeaderTextsDescription"><h3>{privy.description}</h3></div>
          </div>
        </div>

        <aside>
          <div className="sidebarHeader">
            <div className="sidebarHeaderPhoto">
              <img id="photo" src={imgt} alt=""/>
            </div>
            <div className="sidebarHeaderName">
              <h2 id="userName">{name}</h2>
            </div>
          </div>
          <div className="sidebarSearch">
            <input maxLength="14" placeholder="Pesquisar..." type="text" name="" id="searchContacts"/>
          </div>

          <div className="sidebarContacts">

            {
              contacts.map(contact => (
                <div className="boxContact" key={contact._id} onClick={() => contactSelected(contact)}>
                  <div className="contactPhoto"><img src={imgt} alt=""/></div>
                  <div className="contactName">{contact.name}</div>
                </div>
              ))
            }

          </div>

        </aside>

      <main id="mainChat">
       {
         messages.map(msg => (

          msg.author_id === patient_id ?

          <div class="messageBody" key={msg._id}>
            <div class="messageMainSender">
              <div class="sender">
                <div class="messageText">
                  {emojify(msg.message)}
                </div>
                <span class="messageTime">
                  {msg.hour}
                </span>
              </div>
            </div>
          </div>

          :

          <div class="messageBody" key={msg._id}>
            <div class="messageMainReceiver">
              <div class="receiver">
                <div class="messageText">
                  {emojify(msg.message)}
                </div>
                <span class="messageTime">
                  {msg.hour}
                </span>
              </div>
            </div>
          </div>
         
         ))
       }
      </main>

        <div id="boxEmojis" className="boxEmojisOpen">

          <div className="boxEmojisContent">
            {emojisEmoji.map( emj => (
              <div className="emojiDiv">
                {emojify(emj.name, confEmojis)}
              </div>
            ))}           
          </div>         

          <div className="boxEmojisOptions">

            {
              emjBtn.map(emj => (
                <div className="boxEmojisOption">
                  {emj.emojiOption}
                </div>
              ))
            }

          </div>
        
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
            <MdKeyboardVoice id="voiceButton" size={35} onClick={logOut}/>
          </div>
        </footer>

      </div>
    </div>
  );
}
