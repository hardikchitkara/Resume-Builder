import React from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {useFirestore} from "react-redux-firebase";
function Finalize(props) {
  const firestore=useFirestore();
  let documentd=props.document;
  let contactSection=props.contact;
  let educationSection=props.education;

  const saveToDatabase= async()=>{
    let user = await firestore.collection('users').doc(props.auth.uid).get();
    user = user.data();
    let newObj = null;
    if (user.resumeIds != undefined) { 
      newObj = {...user.resumeIds,[documentd.id]: { educationSection: educationSection, contactSection: contactSection, document: documentd }}
    }
    else {
      newObj = {[document.id]:{ educationSection: educationSection, contactSection: contactSection, document: document }}
    }
    await firestore.collection('users').doc(props.auth.uid).update({
      resumeIds: newObj
    })
    alert("Your Resume has been saved to Database");
  }

  const DownloadResume=()=>{
    const input = document.getElementById('resumePreview');
    console.log(document)
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF("p", "mm", "a4");
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
          // pdf.output('dataurlnewwindow');
          pdf.save("resume.pdf");
        }).catch(function(error){
          console.log(error)
        })
  }

  return (
    <div className="container full finalize-page" >
    <div className="funnel-section ">
        <div className="finalize-preview-card " id="resumePreview">
          <ResumePreview contactSection={props.contact} educationSection={props.education} skinCd={props?.document?.skinCd}></ResumePreview>   
        </div>
        <div className="finalize-settings center">
            <div className=" download-resume resume-options" style={{marginTop:"10rem",marginBottom:"10rem"}}>
              <p className="no-margin"  >
                Download Resume As PdF
              </p>
                  <a style={{cursor:'pointer'}}  onClick={DownloadResume}  >Download Resume</a>
            </div>
            <div className=" download-resume resume-options" >
              <p className="no-margin"  >
                Save to Database
              </p>
                  <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
            </div>
        </div>
  </div>
  </div>
  ) 
}

function mapStateToProps(store)
{
  return {
    document:store.document,
    education:store.education,
    contact:store.contact,
    auth:store.firebase.auth
  }
}


export default withRouter(connect(mapStateToProps)(Finalize))
