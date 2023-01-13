import React from 'react';
import useFetch from '../hooks/useFetch';
import {useParams} from 'react-router-dom';

const Room = () => {
      const {roomId} = useParams() 
      const url = `http://localhost:5000/rooms/${roomId}` ; 
      const{data, loading, error} = useFetch(url,"GET");
    return (
        <>
        {
            loading === false && data !== null &&
            
                <div class = "container d-flex justify-content-center p-5">
                    <div className="card" style={{width: "70rem"}}>
                        <img src={data[0]?.img} className="card-img-top" alt={data[0]?.name}></img>
                            <div className="m-4">
                                <h5 className="card-title">{data[0].name}</h5>
                                <p className="card-text">{data[0].description}</p>
                            </div>
                    </div>
                </div>

         } </>)
         
    };
        

export default Room;