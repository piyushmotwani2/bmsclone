import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyDjPVobW8B7PXKTT_tCBsOTKgeB85orb8A",
  authDomain: "bmsclone-4a970.firebaseapp.com",
  projectId: "bmsclone-4a970",
  storageBucket: "bmsclone-4a970.appspot.com",
  messagingSenderId: "994854136045",
  appId: "1:994854136045:web:81962a24bdfa1d47cc04e4",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
