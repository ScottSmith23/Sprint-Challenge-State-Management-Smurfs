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


const SmurfCard = ({smurf}) => {

  return (
    <>
      <div className="smurfCard"><Col >
           <Card className="cardstyle" >
             <CardHeader className="setup">{smurf.name}</CardHeader>
             <CardBody>
               <CardText className="punchline">age:{smurf.age}</CardText>
               <CardText className="punchline">height:{smurf.height}</CardText>
               </CardBody>
           </Card>
         </Col></div>
    </>
  );
};


export default SmurfCard
