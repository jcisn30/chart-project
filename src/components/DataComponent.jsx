import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJordanData, getKobeData, getLebronData } from '../redux/actions/data';
import Jumbo from './JumboComponent';



const Data = (props) => {
  //redux dispatch
  const dispatch = useDispatch();
  //get jordan data, loading, error state via redux useSelector
  const jordanData = useSelector(state => state.jordan.jordan);
  const loadingJordan = useSelector(state => state.jordan.loading);
  const errorJordan = useSelector(state => state.jordan.error);

  //get kobe data, loading, error state via redux useSelector
  const kobeData = useSelector(state => state.kobe.kobe);
  const loadingKobe = useSelector(state => state.kobe.loading);
  const errorKobe = useSelector(state => state.kobe.error);

  //get lebron data, loading, error state via redux useSelector
  const lebronData = useSelector(state => state.lebron.lebron);
  const loadingLebron = useSelector(state => state.lebron.loading);
  const errorLebron = useSelector(state => state.lebron.error);
  

  //via react hook useEffect, dipatch jordan, kobe, lebron data on page load
  useEffect(() => {
    dispatch(getJordanData());
    dispatch(getKobeData());
    dispatch(getLebronData());
  },[])

  
  return (
    <>
    {/* if any load state is still populating display loading message */}
    {(loadingJordan || loadingKobe || loadingLebron) && <p>Loading...</p>}
    {/* if any data errors and loading state is false, display error message */}
    {(errorJordan || errorKobe || errorLebron) && (!loadingJordan || !loadingKobe || !loadingLebron) && <p>{errorJordan || errorKobe || errorLebron}</p>}
    {/* if all data lengths equal undefined, usually would set this to greater than zero, create jumbo component and pass state data via props */}
    {jordanData.length === undefined && kobeData.length === undefined && lebronData.length === undefined && <Jumbo jordan={jordanData} kobe={kobeData} lebron={lebronData}/> }  
    </>
  )
  

}


export default Data;