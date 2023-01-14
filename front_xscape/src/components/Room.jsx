import React from 'react';
import useFetch from '../hooks/useFetch';
import {useParams} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const Room = () => {
    const {roomId} = useParams() 
    const url = `http://localhost:5000/rooms/${roomId}` ; 
    const {data, loading, error} = useFetch(url,"GET");

    const {user, setUser}= useContext(UserContext)

    const urlReservation = `http://localhost:5000/booking/${roomId}`
    const reservation = useFetch(urlReservation, "GET")

      
    return (
        <>
        {
            (loading === false && data !== null) ?
            
                <div className = "container d-flex justify-content-center p-5">
                    <div className="card" style={{width: "70rem"}}>
                        <img src={data[0]?.img} className="card-img-top" alt={data[0]?.name}></img>
                            <div className="m-4">
                                <h5 className="card-title">{data[0].name}</h5>
                                <p className="card-text">{data[0].description}</p>
                                <div className='container d-flex flex-wrap justify-content-around'>
                                    {reservation.loading===false && reservation.data?.calendar?.map((reservation)=>{
                                    return(
                                        <div key={reservation.day} style= {{maxWidth: "100px"}}>
                                            <h6 className='text-center'>{reservation.day}</h6>
                                            <button 
                                                key= {reservation.day + "AM"}
                                                className='btn btn-dark m-1' 
                                                style= {{minWidth: "100px"}}>Matin
                                            </button>
                                            <button 
                                                key= {reservation.day + "PM"}
                                                className='btn btn-dark m-1' 
                                                style= {{minWidth: "100px"}}>Aprem
                                            </button>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                    </div>
                </div> 
                : <p>Loading...</p>

         } </>)
         
    };
        

export default Room;