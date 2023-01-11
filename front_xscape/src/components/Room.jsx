import React from 'react';
import useFetch from '../hooks/useFetch';
import {useParams} from 'react-router-dom';

const Room = () => {
      const {roomId} = useParams() 
      const url = `http://localhost:5000/rooms/${roomId}` ; 
      const{data, loading, error} = useFetch(url,"GET");
      console.log(data);
      console.log(loading)

    return (
        <>
        {
            loading === false && data !== null &&
            
                <div class = "container">
                    <div className="card" style={{width: "35rem"}}>
                        <img src={data[0]?.img} className="card-img-top" alt="..."></img>
                    
                            <h5 className="card-title">{data[0].name}</h5>
                            <p className="card-text">{data[0].description}</p>
                    
                    </div>
                </div>

         } </>)
         
    };
        

export default Room;