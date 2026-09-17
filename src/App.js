import { NotificationContainer } from 'react-notifications';
import React from 'react';

import 'react-notifications/lib/notifications.css';

import './App.scss';

import Mainpage from './pages/Mainpage/Mainpage';

function App() {
  return (
    <div className="App">
      <Mainpage />
      <NotificationContainer />
    </div>
  );
}

export default App;
