import { useContext, useState, useEffect } from "react"
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
    
    
    return(
        <>
            {user.isLogged && user.infos !== null &&
                <div className="text-center">
                    <h1 className="m-3">Historique de {user.infos.firstName} {user.infos.lastName}:</h1>
                    {!loading && data.map((room) => 
                        room.calendar.map((day) => {
                            if (day.time.AM.userId === user.infos._id) {
                                return (
                                    <div>
                                        <h2>{roomName(room.roomId)}</h2>
                                        <p>{day.day}, le matin</p>
                                    </div>
                                )
                            } else if (day.time.PM.userId === user.infos._id){
                                return (
                                    <div>
                                        <h2>{roomName(room.roomId)}</h2>
                                        <p>{day.day}, l'après-midi</p>
                                    </div>
                                )
                            }
                        })
                    )}
                </div>
            }
        </>
    )
}