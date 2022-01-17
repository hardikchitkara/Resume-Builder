import * as actionsTypes from "../actionTypes"
import 'firebase/compat/auth';

export const signInRequest=()=>{
    return {
        type: actionsTypes.SIGN_IN_REQUEST
    }
}
export const signInSuccess=(users)=>{
    return {
        type:actionsTypes.SIGN_IN_SUCCESS,
    }
}
export const signInFailed=(error)=>{
    return {
        type:actionsTypes.SIGN_IN_FAILED,
        payload:error
    }
}
export const registerRequest=()=>{
    return {
        type: actionsTypes.REGISTER_REQUEST
    }
}
export const registerSuccess=(users)=>{
    return {
        type: actionsTypes.REGISTER_SUCCESS,
        payload:users
    }
}
export const registerFailed=(error)=>{
    return {
        type: actionsTypes.REGISTER_FAILED,
        payload:error
    }
}
export const signIn = (userData) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: actionsTypes.SIGN_IN_REQUEST })
        const firebase = getFirebase();
        try {
            console.log(userData);
            let data = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
            dispatch({ type: actionsTypes.SIGN_IN_SUCCESS })
        }
        catch (err) {
            console.log(err);
            dispatch({ type: actionsTypes.SIGN_IN_FAILED, payload: err.message })
            setTimeout(() => {dispatch({ type: actionsTypes.REMOVE_ERROR })}, 5000)
        };
    }
}
export function signout(){
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        await firebase.auth().signOut()
        .then(() => {dispatch({type: actionsTypes.SIGN_OUT})})
        .catch((err) => {dispatch({type: actionsTypes.SIGN_OUT_FAILED,payload:err.message})});
    }
}
export const register=(userData)=>{
    return async (dispatch, getState, {getFirebase,getFirestore}) => {
        dispatch({type: actionsTypes.REGISTER_REQUEST})
        const firebase = getFirebase();    
        const firestore = getFirestore();    
        await firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(async(data) => {
            const res = await firestore.collection('users').doc(data.user.uid).set({
                email:userData.email,
                resumeIds:[]
            });
            dispatch({type: actionsTypes.REGISTER_SUCCESS})
        }).catch((err) => {
            dispatch({type: actionsTypes.REGISTER_FAILED,payload:err.message})
            setTimeout(()=>{dispatch({type: actionsTypes.REMOVE_ERROR})},5000)
        });
    }
} 