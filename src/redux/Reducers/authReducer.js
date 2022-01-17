import initialState from "../initialState.json"
import * as actionsTypes from "../actionTypes"
export default function authReducer(state=initialState.auth,action)
{
    switch(action.type){
        case actionsTypes.SIGN_IN_SUCCESS:
            return{
                ErrorMessage:"",
                loading:false
            }
        case actionsTypes.SIGN_IN_FAILED:
            return{
                ErrorMessage:action.payload,
                loading:false
            }
        case actionsTypes.SIGN_IN_REQUEST:
            return{
                ErrorMessage:"",
                loading:true
            }
        case actionsTypes.REMOVE_ERROR:
            return{
                ErrorMessage:"",
                loading:false
            }
        case actionsTypes.REGISTER_REQUEST:
            return {
                ErrorMessage:"",
                loading:true
            }  
        case actionsTypes.REGISTER_SUCCESS:
            return  {
                ErrorMessage:"",
                loading:false
            }   
        case actionsTypes.REGISTER_FAILED:
            return {
                ErrorMessage:action.error,
                loading:false
            }   
        case actionsTypes.SIGN_OUT_FAILED:
            return {
                ErrorMessage:action.error,
                loading:false
            }   
        default:
            return state;
    }
}
