import React, { useCallback } from "react";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import {getData,postData,deleteData,editData} from '../actions/actions';
import "./App.css";
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const smurfData = useSelector(state => state)
  const dispatch = useDispatch()
  const fetchData = useCallback((e)=>dispatch(getData(e)),[dispatch])
  const postSmurfData = useCallback((e)=>dispatch(postData(e)),[dispatch])
  const deleteSmurfData = useCallback((e)=>dispatch(deleteData(e)),[dispatch])
  const editSmurfData = useCallback((e)=>dispatch(editData(e)),[dispatch])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm fetchData={fetchData} postData={postSmurfData} isFetchingData={smurfData.isFetchingData} />
        <SmurfList smurfs={smurfData.smurfs} deleteData={deleteSmurfData} editData={editSmurfData}/>
      </div>
    );
}

export default App;
