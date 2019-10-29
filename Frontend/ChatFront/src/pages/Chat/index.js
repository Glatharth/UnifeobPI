import React, { useState, useEffect, useMemo } from 'react';

import { Link } from "react-router-dom";

import {
  Container,
  Header, HeaderContent, HeaderPhoto, PhotoHeader, BoxTexts, HeaderName, HeaderDescription, HeaderButtons,
  Aside, AsideHeader, AsidePhoto, PhotoAside, AsideName, AsideSearch, BoxContacts, BoxContact, ContactPhoto, PhotoContact, ContactName,
  Main, BoxMessage, BoxSender, BoxReceiver, Sender, Receiver, MessageText, MessageTime,
  BoxEmojis, Emojis, Emoji, Options, Option,
  BoxSend, ButtonEmoji, BoxInput, ButtonVoice
} from './styles';

// Emojis
import { emojify } from 'react-emojione';
import EmojisFavorites from './Emojis/EmojisListFavorites.json';
import EmojisEmoji from './Emojis/EmojisListEmoji.json';
import EmojisFace from './Emojis/EmojisListFace.json';
import EmojisSymbols from './Emojis/EmojisListSymbols.json';
import EmojisNature from './Emojis/EmojisListNature.json';
import EmojisFood from './Emojis/EmojisListFood.json';
import EmojisFlags from './Emojis/EmojisListFlags.json';

// Api 
import api from '../../services/api';

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
  function logOut() {
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
  }, []);

  // Contato selecionado
  const [privy, setPrivy] = useState([]);

  // Setar contato selecionado
  function contactSelected(contact) {
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
  function readKey(e) {
    if (e.keyCode === 13) {
      console.log(e);
      chatSubmit();
    }
  }

  // Enviando a mensagem
  function chatSubmit() {
    if (messageInput.length) {

      let messageObject = {
        author: "Name",
        message: messageInput,
        hour: calcHour(),
        author_id: patient_id
      };

      setMessages([...messages, messageObject]);

      socket.emit('sendMessage', messageObject);

      setBoxEmj(false);
      setMessageInput("");
      selectMessageInput();
    }
  }

  // Calcular e formatar hora da mensagem
  function calcHour() {

    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (hours < 6) {
      return (`${hours}:${minutes} da madrugada`)
    }

    else if (hours < 12) {
      return (`${hours}:${minutes} da manha`)
    }

    else if (hours < 18) {

      if (hours > 12) { hours = hours - 12 };

      return (`${hours}:${minutes} da tarde`)
    }

    else if (hours <= 24) {
      hours = hours - 12
      return (`${hours}:${minutes} da noite`)
    }
  }

  // Selecionar caixa de mensagem
  function selectMessageInput() {
    document.querySelector('#message').focus();
  }

  //////////////////////////////////////////////////////////////////////////

  // EMOJIS

  // Opcoes de Emojis
  const [emjBtn, setEmjBtn] = useState([
    { list: EmojisFavorites, name: "favorites", emojiOption: <MdStar size={29} />, selected: true },
    { list: EmojisEmoji, name: "emoji", emojiOption: <MdInsertEmoticon size={29} /> },
    { list: EmojisFace, name: "face", emojiOption: <MdFace size={29} /> },
    { list: EmojisSymbols, name: "symbols", emojiOption: <MdFavoriteBorder size={29} /> },
    { list: EmojisNature, name: "nature", emojiOption: <MdPets size={29} /> },
    { list: EmojisFood, name: "food", emojiOption: <MdRestaurant size={29} /> },
    { list: EmojisFlags, name: "flags", emojiOption: <MdMap size={29} /> }
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
  function alterBoxEmoji() {
    setBoxEmj(!boxEmj);
  }

  // Selecionar opcao de Emojis
  function selected(name, list) {

    const newEmj = emjBtn.map(emj => {

      // eslint-disable-next-line
      emjBtn.map(emj => {
        emj.selected = false;
      })

      return emj.name === name ? { ...emj, selected: true } : emj
    });

    setEmjBtn(newEmj);
    setEmojisEmoji(list);
  };

  // Selecionar Emoji
  function renderEmoji(emj) {
    const newMessage = `${messageInput}${emj}`;
    setMessageInput(newMessage);
    selectMessageInput();
  }

  //////////////////////////////////////////////////////////////////////////

  return (

    <Container emojisOpen={boxEmj}>

      <Header>

        <HeaderContent>

          <HeaderPhoto>
            <PhotoHeader src={imgt} alt="" />
          </HeaderPhoto>

          <BoxTexts>

            <HeaderName>
              <h2>
                {privy.name}
              </h2>
            </HeaderName>

            <HeaderDescription>
              <h3>
                {privy.description}
              </h3>
            </HeaderDescription>

          </BoxTexts>

        </HeaderContent>

        <HeaderButtons>

        </HeaderButtons>

      </Header>

      <Aside>

        <Link to="/profile">

          <AsideHeader>

            <AsidePhoto>
              <PhotoAside src={imgt} alt="" />
            </AsidePhoto>

            <AsideName>
              <h2>{name}</h2>
            </AsideName>

          </AsideHeader>

        </Link>


        <AsideSearch>
          <input maxLength="14" placeholder="Pesquisar..." type="text" name="" id="searchContacts" />
        </AsideSearch>

        <BoxContacts>

          {
            contacts.map(contact => (
              <BoxContact key={contact._id} onClick={() => contactSelected(contact)}>

                <ContactPhoto>
                  <PhotoContact src={imgt} alt="" />
                </ContactPhoto>

                <ContactName>{contact.name}</ContactName>

              </BoxContact>
            ))
          }

        </BoxContacts>

      </Aside>

      <Main>
        {
          messages.map(msg => (

            msg.author_id === patient_id ?

              <BoxMessage key={msg._id}>
                <BoxSender>
                  <Sender>
                    <MessageText>
                      {emojify(msg.message)}
                    </MessageText>
                    <MessageTime>
                      {msg.hour}
                    </MessageTime>
                  </Sender>
                </BoxSender>
              </BoxMessage>

              :

              <BoxMessage key={msg._id}>
                <BoxReceiver>
                  <Receiver>
                    <MessageText>
                      {emojify(msg.message)}
                    </MessageText>
                    <MessageTime>
                      {msg.hour}
                    </MessageTime>
                  </Receiver>
                </BoxReceiver>
              </BoxMessage>

          ))
        }
      </Main>

      <BoxEmojis open={boxEmj}>

        <Emojis>
          {emojisEmoji.map(emj => (
            <Emoji key={emj.name} onClick={() => renderEmoji(emj.name)}>
              {emojify(emj.name, confEmojis)}
            </Emoji>
          ))}
        </Emojis>

        <Options>

          {
            emjBtn.map(emj => (
              <Option key={emj.name} selected={emj.selected} onClick={() => selected(emj.name, emj.list)}>
                {emj.emojiOption}
              </Option>
            ))
          }

        </Options>

      </BoxEmojis>

      <BoxSend>

        <ButtonEmoji>
          <MdMood id="emojiButton" size={35} onClick={alterBoxEmoji} />
        </ButtonEmoji>

        <BoxInput>
          <input
            onKeyDown={readKey} autocomplete="off"
            onChange={e => setMessageInput(e.target.value)}
            name="message" id="message"
            value={messageInput}
          />
        </BoxInput>

        <ButtonVoice className="sendMessageVoice">
          <MdKeyboardVoice id="voiceButton" size={35} onClick={logOut} />
        </ButtonVoice>

      </BoxSend>


    </Container>
  );
}
