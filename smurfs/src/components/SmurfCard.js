import React, { useState } from "react";
import {
    Card,
    Button,
    CardHeader,
    CardBody,
    CardText,
    Col,
    Collapse
  } from "reactstrap";


const SmurfCard = ({smurf,deleteData,editData}) => {

    const [newSmurf, setNewSmurf] = useState({
        id:smurf.id,
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      });

    const [isEditing, setIsEditing] = useState(false);
const handleDelete = e => {
        console.log("delete");
        deleteData(smurf.id)
        console.log(smurf.id);
    };

const handleEdit = e => {
        console.log("edit");
        setIsEditing(false);
        editData(newSmurf);
    };
    const handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
        console.log(newSmurf);
        
      };

  return (
    <>
      <div className="smurfCard"><Col >
           <Card className="cardstyle" >
             <CardHeader className="smurfTitle">
                {!isEditing ? (<span><span className="smurfName">{smurf.name}</span>
                 <span className="modifyData">
                     <span onClick={() => setIsEditing(!isEditing)}>📝</span>
                     <span  onClick={handleDelete}>❌</span>
                     </span></span>):(<span><input
            className="edit-input"
            id="name"
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
          />
          <span classname="modifyData" onClick={handleEdit}>✅</span>
           </span>) }
                 </CardHeader>
             <CardBody>
                     <CardText className="punchline">age:{!isEditing ? (<span>{smurf.age}</span>):(<span><input
            className="edit-input"
            id="age"
            type="text"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
          />
           </span>)}</CardText>
               <CardText className="punchline">height:{!isEditing ? (<span>{smurf.height}</span>):(<span><input
            className="edit-input"
            id="height"
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
          />
           </span>)}</CardText>
               </CardBody>
           </Card>
         </Col></div>
    </>
  );
};


export default SmurfCard
