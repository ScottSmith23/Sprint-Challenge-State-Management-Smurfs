import React from "react";
import SmurfCard from './SmurfCard'

const SmurfList = props => {


  return (
    <><div className="smurfs">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map(smurf =>
             <SmurfCard smurf={smurf} deleteData={props.deleteData} editData={props.editData} />
             )
      )}
   </div> </>
  );
};

export default SmurfList;
