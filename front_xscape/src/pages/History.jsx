import { useContext, useState, useEffect } from "react"
import { UserContext } from "../components/context/UserContext"

export default function History({}) {
    const {user, setUser}=useContext(UserContext)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([])
    const [error,setError] = useState(null)

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
    
    
    
    
    return(
        <>
            {user.isLogged && user.infos !== null &&
                <div>
                    <h1 className="m-3">Historique de {user.infos.firstName} {user.infos.lastName}:</h1>
                    {!loading && data.map((room) => {
                        room.calendar.map((day) => {
                            // console.log(room.roomId)
                            // console.log(day.time.AM.userId)
                           (day.time.AM.userId === user.infos.id) && console.log("oui")
                            // setData([...data, {room: room.roomId, day : day.time}])
                            
                        //  else if (day.time.PM.userId === user.infos.id)&&
                        //     // setData([...data, {room: room.roomId, day : day.time}])
                        // }
                        })
                      })}
                </div>
            }
        </>
    )
}