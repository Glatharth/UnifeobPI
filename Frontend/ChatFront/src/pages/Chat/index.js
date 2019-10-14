import React, { useState, useEffect, useMemo } from 'react';

// Emojis
import {emojify} from 'react-emojione';
import EmojisFavorites from './Emojis/EmojisListFavorites.json';
import EmojisEmoji from './Emojis/EmojisListEmoji.json';
import EmojisFace from './Emojis/EmojisListFace.json';
import EmojisSymbols from './Emojis/EmojisListSymbols.json';
import EmojisNature from './Emojis/EmojisListNature.json';
import EmojisFood from './Emojis/EmojisListFood.json';
import EmojisFlags from './Emojis/EmojisListFlags.json';

// Api 
import api from '../../services/api';

// Css
import './styles.css';

// Dados necessarios
import { logout, getPatient, getName } from '../../services/auth';

// Icones
import { MdMood, MdKeyboardVoice, MdStar, MdInsertEmoticon, MdFace, MdFavoriteBorder, MdPets, MdRestaurant, MdMap } from 'react-icons/md';

// Imagens
import imgt from './../../images/user.jpg'

// Socket
import socketio from 'socket.io-client';

export default function Chat({ history }) {

  // Configuracoes gerais

  // Pegar id do usuario
  const patient_id = getPatient();

  // Pegar nome do usuario
  const name = getName();

  // Deslogar
  function logOut(){
    logout();
    history.push('/');
  }

  //////////////////////////////////////////////////////////////////////////

  // Contatos

  // Contatos do usuario
  const [contacts, setContacts] = useState([]);

  // Pegar contatos da API
  useEffect(() => {
    async function fetchData() {
    const response = await api.get('/dashboard/patients/');
    setContacts(response.data.patients);
    }
    fetchData();
  }, [contacts]);

  // Contato selecionado
  const [privy, setPrivy] = useState([]);

  // Setar contato selecionado
  function contactSelected(contact){
    setPrivy(contact);
  }

  //////////////////////////////////////////////////////////////////////////

  // Mensagens

  // Mensagens do chat
  const [messages, setMessages] = useState([]);

  // Mensagem sendo digitada pelo usuario
  const [messageInput, setMessageInput] = useState("");

  // Configuracao da API de mensagens
  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: { patient_id }
  }), [patient_id]);

  // Carregar mensagens antigas
  useEffect(() => {
    socket.on('previousMessages', data => {
      setMessages(data);
    })
    selectMessageInput();
  }, [messages, socket]);

  // Recebendo mensagens
  socket.on('receivedMessage', data => {
    setMessages([...messages, data]);
  })

  // Quando o usuario aperta Enter
  function readKey(e){
    if(e.keyCode === 13) {
      console.log(e);
      chatSubmit();
    }
  }

  // Enviando a mensagem
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
      closeEmojis();
      selectMessageInput();
    }
  }

  // Calcular e formatar hora da mensagem
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

  // Selecionar caixa de mensagem
  function selectMessageInput(){
    document.querySelector('#message').focus();
  }

  //////////////////////////////////////////////////////////////////////////

  // EMOJIS

  // Opcoes de Emojis
  const [emjBtn, setEmjBtn] = useState([
    {list: EmojisFavorites, name: "favorites", emojiOption: <MdStar size={29}/>, selected: "selected"},
    {list: EmojisEmoji, name: "emoji", emojiOption: <MdInsertEmoticon size={29}/>},
    {list: EmojisFace, name: "face", emojiOption: <MdFace size={29}/>},
    {list: EmojisSymbols, name: "symbols", emojiOption: <MdFavoriteBorder size={29}/>},
    {list: EmojisNature, name: "nature", emojiOption: <MdPets size={29}/>},
    {list: EmojisFood, name: "food", emojiOption: <MdRestaurant size={29}/>},
    {list: EmojisFlags, name: "flags", emojiOption: <MdMap size={29}/>}
  ])

  // Lista de emoji selecionada no momento
  const [emojisEmoji, setEmojisEmoji] = useState(EmojisFavorites);

  // Caixa de Emojis
  const [boxEmj, setBoxEmj] = useState(false);

  // Configuracao dos Emojis
  const confEmojis = {
    style: {
      height: 35,
      width: 35,
    }
  }

  // Controlar caixa de Emojis
  function alterBoxEmoji(){
    boxEmj ? closeEmojis() : openEmojis();
  }

  // Abrir caixa de Emojis
  function openEmojis(){
    document.querySelector('#chatMain').classList.remove('chatConteiner');
    document.querySelector('#chatMain').classList.add('chatConteinerEmojis');
    document.querySelector('#boxEmojis').classList.remove('boxEmojisClose');
    document.querySelector('#boxEmojis').classList.add('boxEmojisOpen');
    setBoxEmj(true);
  }

  // Fechar caixa de Emojis
  function closeEmojis(){
    document.querySelector('#chatMain').classList.remove('chatConteinerEmojis');
    document.querySelector('#chatMain').classList.add('chatConteiner');
    document.querySelector('#boxEmojis').classList.remove('boxEmojisOpen');
    document.querySelector('#boxEmojis').classList.add('boxEmojisClose');
    setBoxEmj(false);
  }

  // Selecionar opcao de Emojis
  function selected(name, list){
    
    const newEmj = emjBtn.map(emj => {
  
      // eslint-disable-next-line
      emjBtn.map(emj => {
        emj.selected = 'noSelected';
      })
  
      return emj.name === name ? {...emj, selected: 'selected'} : emj
    });
  
    setEmjBtn(newEmj);
    setEmojisEmoji(list);
  };

  // Selecionar Emoji
  function renderEmoji(emj){
    const newMessage = `${messageInput}${emj}`;
    setMessageInput(newMessage);
    selectMessageInput();
  }

  //////////////////////////////////////////////////////////////////////////

  return (
    <div className="outChat">
      <div id="chatMain" className="chatConteiner">

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

        <div id="boxEmojis" className="boxEmojisClose">

          <div className="boxEmojisContent">
            {emojisEmoji.map( emj => (
              <div className="emojiDiv" onClick={() => renderEmoji(emj.name)}>
                {emojify(emj.name, confEmojis)}
              </div>
            ))}           
          </div>         

          <div className="boxEmojisOptions">

            {
              emjBtn.map(emj => (
                <div className={`boxEmojisOption ${emj.selected}`} onClick={() => selected(emj.name, emj.list)}>
                  {emj.emojiOption}
                </div>
              ))
            }

          </div>
        
        </div>

        <footer>
          <div className="sendMessageEmoji">
            <MdMood id="emojiButton" size={35} onClick={alterBoxEmoji}/>
          </div>
          <div className="sendMessageText">
            <input 
                onKeyDown={readKey} contentEditable
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
