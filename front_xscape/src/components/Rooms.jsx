import React from 'react';
import useFetch from '../hooks/useFetch';

const Rooms = () => {
    // const [rooms, setRooms] = useState()
    // get all rooms
    const URL = "http://localhost:5000/rooms"
    const { data, loading, error } = useFetch(URL, "GET");
    console.log("loading " + loading);
    // console.log("data " + data);
    //data est un objet pour l'utiliser on doit le convertir avec stringify
    console.log(data)
    console.log("error " + error);

    // (loading === false && data !== null && error === null) && setData(data)
    // allRooms.map(room => {
    //     console.log(room.name)
    // })
   
    
    return (

        <>
        {/* {(loading === false && data !== null && error === null) &&  */}
        {loading === false &&
        data.map((room) => (
            // console.log(room.name)
            <p>{room.name}</p>
            // <div className="card" style="width: 18rem;">
            // <img src="..." className="card-img-top" alt="..."></img>
            // <div className="card-body">
            //     <h5 className="card-title">{room.name}</h5>
            //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     <a href="#" className="btn btn-primary">Go somewhere</a>
            // </div>
            // </div>

))}
    </>

    );
    }

export default Rooms;
