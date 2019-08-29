import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Noticeboard as Feshdesk } from 'notice-board-freshdesk';

const auth = {
  username: '',
  password: ''
}

function App() {
  return (
    <div className="App">
      <Feshdesk subdomain={'ucieducation'} auth={auth} />
    </div>
  );
}

export default App;
