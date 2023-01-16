import { useContext, useState, useEffect } from "react"
import HistoryCards from "../components/cards/HistoryCards"
import { UserContext } from "../components/context/UserContext"

export default function History({}) {
    const {user, setUser}=useContext(UserContext)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([])
    const [error,setError] = useState(null)
    const [room, setRoom] = useState()

    useEffect(() => {
        setLoading("Loading...")

        if (user.isLogged){
            const userId = user.infos._id
            const url=`http://localhost:5000/history/${userId}`

            fetch(url)
                .then(res => {
                    return res.json()})
                .then(dt =>{ 
                    setData(dt)
                    setLoading(false);
                })
                    
                .catch (err => {
                    setError("Une erreur est apparue :" + err)
                    setLoading(false)
                })
        }

    }, [user])
    
    function roomName(id){
        const url = `http://localhost:5000/rooms/${id}`
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(dt => 
                setRoom(dt[0].name)
            )
            .catch (err => {
                err
            })
        return room
    }
    
    return (
      <>
        {user.isLogged && user.infos !== null && (
            <div>
            <h2 className="text-center m-3">
              Voici votre historique de réservation
            </h2>
            <HistoryCards />
            {!loading &&
            
              data.map((room) => {
                return (
                  room.calendar.map((day) => {
                    {console.log(day.time.AM.userId);}
                    {console.log(user.infos._id);}
                  if (day.time.AM.userId === user.infos._id) return <p>{day?.time.AM.userId}</p>;
                  // setData([...data, {room: room.roomId, day : day.time}])

                  //  else if (day.time.PM.userId === user.infos.id)&&
                  //     // setData([...data, {room: room.roomId, day : day.time}])
                  // }
                }));
              })}
          </div>
        )}
      </>
    );

}