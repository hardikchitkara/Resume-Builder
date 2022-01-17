import {createStore , applyMiddleware} from "redux";
import {combineReducers} from "redux";
import contactReducer from "./Reducers/contactReaducer";
import documentReducer from "./Reducers/documentReducer";
import educationReducer from "./Reducers/educationReducer";
import authReducer from "./Reducers/authReducer";
import thunk from "redux-thunk";
import { getFirebase, firebaseReducer } from "react-redux-firebase";  
import { reduxFirestore ,getFirestore ,firestoreReducer} from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import firebase from 'firebase/compat/app';

const rootReducer=combineReducers({
    document:documentReducer,
    contact:contactReducer,
    education:educationReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer
});

let store=createStore(rootReducer,
    composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument( {getFirebase,getFirestore} ) ),
    reduxFirestore(firebase)
    )
);

export default store;