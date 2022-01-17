import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import * as taskActions from "../../redux/actionTypes"
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

function GettingStarted(props) {
     let history = useHistory();
     const onChange = async (skinCd) => {
        if(props.id==null){
            let doc={ id:uuid() , skinCd:skinCd }     
            props.setSkin(doc) ;
        }
        else props.updateSkin(skinCd);
        history.push('/contact');
      }
    return (  
        <div className="container med gettingStarted" >
            <div className="section" >

                <h1 className=" center">Select a resume template to get started</h1>
                <p className="center">You’ll be able to edit and change this template later!</p>

                <div className="styleTemplate ">
                {
                    //value=> skin1,skin2,skin3,skin4
                    skinCodes.map((value,index) => {
                        return( 
                        <div key={index} className="template-card rounded-border">
                             <i className={(value == props.skinCd? 'selected fa fa-check' :'hide') } ></i>
                            <img  className='' src={'/images/' + value + '.svg'}/>
                            <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                        </div>
                        );
                    })
                }
                </div>
                
            </div>
        </div>
    );  
}
const mapStateToProps=(store)=>{
    return store.document;
}
const mapDispatchToProps=(dispatch)=>{
    return({
        setSkin:(doc)=>{
            dispatch({
                type:taskActions.SET_SKIN,
                payload:doc
            }) 
        },
        updateSkin:(skinCd)=>{
            dispatch({
                type:taskActions.UPDATE_SKIN,
                payload:skinCd
            })
        }
    });
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GettingStarted));

