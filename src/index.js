import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {Provider} from "react-redux";
import store from './redux/store';
import firebaseConfig from "./secrets";
import firebase from 'firebase/compat/app'; 
import {createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";  
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
    
,document.getElementById('root'));