import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Lobby from "./videoChat/Lobby.js";
import Meet from "./videoChat/Meet.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Top from './Top';
// import FileSharingLobby from './whateverfilesharingetc';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <Top />
  {/* <App /> */}
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/meet" element={<Meet />} />
      {/* <Route path="/fileshare" element={<FileSharingLobby />} /> */}
    </Routes>
  </Router>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
