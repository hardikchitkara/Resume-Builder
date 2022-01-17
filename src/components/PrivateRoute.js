import React from 'react';
import {Route,Redirect} from "react-router-dom";
import { isLoaded,isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';


const PrivateRoute = (props) => {
    let auth=props.auth;
    let Component=props.component;
    return (  
        <Route  {...props} >
            {
                auth.uid ? <Component {...props} /> : <Redirect to="/"/>
            }
        </Route>
    );
}
const mapStateToProps=(store)=>{
    return {auth:store.firebase.auth};
}
export default connect(mapStateToProps)(PrivateRoute);