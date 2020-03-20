import React, { useState } from "react";

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
      });

  const handleGetData = e => {
    e.preventDefault();
    props.fetchData();
  };

  const handlePostData = e => {
    e.preventDefault();
    props.postData(smurf);
  };

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
    console.log(smurf);
  };

  return (
    <>
    <form onSubmit={handlePostData}>
      <label htmlFor="name">Smurf Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={smurf.name}
      />
      <label htmlFor="age">age</label>
      <input
        id="age"
        name="age"
        onChange={handleChanges}
        value={smurf.age}
      />
      <label htmlFor="height">height</label>
      <input
        id="height"
        name="height"
        onChange={handleChanges}
        value={smurf.role}
      />
      <button className="buttonGet" type="submit">Add Smurf</button>
    </form>
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button className="buttonGet" onClick={handleGetData}>Get Smurfs!</button>
      )}
    </>
  );
};


export default SmurfForm
