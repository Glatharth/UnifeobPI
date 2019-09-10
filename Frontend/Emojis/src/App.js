import React from 'react';

// https://github.com/missive/emoji-mart
import { Emoji } from 'emoji-mart'

function App() {
  return ( 
    <>
      <Emoji emoji='heart_eyes' set='apple' skin={2} size={36} />
      <Emoji emoji='heart_eyes' set='emojione' skin={2} size={36} />
      <Emoji emoji='heart_eyes' set='facebook' skin={2} size={36} />
      <Emoji emoji='heart_eyes' set='google' skin={2} size={36} />
      <Emoji emoji='heart_eyes' set='messenger' skin={2} size={36} />
      <Emoji emoji='heart_eyes' set='twitter' skin={2} size={36} />
      <br />
      <Emoji emoji='joy' set='apple' skin={2} size={36} />
      <Emoji emoji='joy' set='emojione' skin={2} size={36} />
      <Emoji emoji='joy' set='facebook' skin={2} size={36} />
      <Emoji emoji='joy' set='google' skin={2} size={36} />
      <Emoji emoji='joy' set='messenger' skin={2} size={36} />
      <Emoji emoji='laughing' set='emojione' skin={2} size={36} />
    </>
  );
}

export default App;
