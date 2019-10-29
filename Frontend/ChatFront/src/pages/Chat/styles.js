import styled, { keyframes } from 'styled-components';

const photoAnimation = keyframes`
  from{
    opacity: 0;
    transform: scale(0.5);

  }to{
    opacity: 1;
    transform: scale(1);
  }
`;

const textAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateX(-15px);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container
export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: ${props => props.emojisOpen ? "13vh 37vh 40vh 10vh" : "13vh 77vh 0vh 10vh"};
  grid-template-areas: 'a h'
                       'a m'
                       'a e'
                       'a f';
`;

// Header
export const Header = styled.div`
  grid-area: h;

  background: rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 85%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderPhoto = styled.div`
  height: 100%;
  width: 15%;

  animation: ${photoAnimation} 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoHeader = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  background-size: cover;
  background-repeat: no-repeat;
`;

export const BoxTexts = styled.div`
  height: 100%;
  width: 85%;
`;

export const HeaderName = styled.div`
  height: 50%;

  display: flex;
  align-items: flex-end;
`;

export const HeaderDescription = styled.div`
  height: 50%;

  display: flex;
  align-items: flex-start;
`;

export const HeaderButtons = styled.div`
  height: 100%;
  width: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// Aside 
export const Aside = styled.div`
  grid-area: a;
`;

export const AsideHeader = styled.div`
  width: 100%;
  height: 13vh;

  background: rgba(255,255,255, 0.1);
  color: white;
`;

export const AsidePhoto = styled.div`
  width: 40%;
  height: 100%;
  float: left;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoAside = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  animation: ${photoAnimation} 1s;

  background-size: cover;
  background-repeat: no-repeat;
`;

export const AsideName = styled.div`
  width: 60%;
  height: 100%;
  float: left;
  padding-left: 20px;

  animation: ${textAnimation} 1s backwards;
  animation-delay: 0.5s;

  display: flex;
  align-items: center;
`;

export const AsideSearch = styled.div`
  width: 100%;
  height: 10vh;
  background: rgba(0,0,0,0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 80%;
    height: 28px;
    font-size: 16px;
    border-radius: 15px;
    border: none;

    padding-left: 20px;
  }
`;

export const BoxContacts = styled.div`
  width: 100%;
  height: 77vh;
  overflow: auto;
  background: rgba(0,0,0, 0.2);
  transition: 0.5s;
`;

export const BoxContact = styled.div`
  margin: 10px auto;
  width: 98%;
  height: 10vh;
  border: 2px solid white;
  border-radius: 15px;
  background: rgba(255,255,255, 0.1);
  transition: 0.5s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(255,255,255, 0.2);
  }
`;

export const ContactPhoto = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoContact = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContactName = styled.div`
  width: 70%;
  height: 100%;
  font-size: 16pt;
  padding-left: 10px;

  display: flex;
  align-items: center;
`;

// Main
export const Main = styled.div`
  grid-area: m;

  background: rgba(255,255,255, 0.8);
  overflow: auto;
  color:black;

  display: flex;
  flex-direction: column;
`;

export const BoxMessage = styled.div`
  width: auto;
  height: auto;
`;

export const BoxSender = styled.div`
  padding: 3px 20px;
  margin-left: 40%;
  max-width: 60%;
  width: 100%;
`;

export const BoxReceiver = styled.div`
  width: 100%;
  max-width: 60%;
  padding: 3px 20px;
`;

export const Sender = styled.div`
  float: right;
  width: auto;
  background: rgba(255,255,255, 0.5);
  border-radius: 10px 10px 0 10px;
  padding: 4px 10px 7px;
  font-size: 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  display: inline-block;
  word-wrap: break-word;
`;

export const Receiver = styled.div`
  width: auto;
  padding: 4px 10px 7px;
  border-radius: 10px 10px 10px 0;
  background: rgba(0, 0, 0, 0.1);
  font-size: 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  word-wrap: break-word;
  display: inline-block;
`;

export const MessageText = styled.div`
  height: 100%;
  padding: 5px;
  word-wrap: break-word;
  font-size: 16px;
  padding-bottom: 0;
  text-align: left;
  justify-items: center;
  align-items: center;
  display: flex;
  font-weight: 600;
  color: #444;
`;

export const MessageTime = styled.div`
  margin-left: 50px;
  font-size: 12px;
  text-align: right;
  color: #444;
  float: right;
`;

// BoxEmojis
export const BoxEmojis = styled.div`
  grid-area: e;

  width: 100%;
  height: 100%;
  border-top: 5px solid rgba(0, 0, 0, 0.5);

  display: ${props => props.open ? "flex" : "none"};
`;

export const Emojis = styled.div`
  width: 93%;
  height: 100%;
  overflow: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

export const Emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

  span {
    cursor: pointer;
  }
`;

export const Options = styled.div`
  width: 7%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-left: 5px solid rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Option = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  cursor: pointer;
  background: ${props => props.selected ? "rgba(0, 0, 0, 0.3)" : "transparent"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

// BoxSend
export const BoxSend = styled.div`
  grid-area: f;

  background: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonEmoji = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;

export const BoxInput = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 95%;
    height: 55%;
    border: none;
    border-radius: 15px;
    font-size: 26px;
    padding-left: 12px;
  }
`;

export const ButtonVoice = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;
