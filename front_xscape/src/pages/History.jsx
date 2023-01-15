import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../components/context/UserContext"
import useFetch from "../hooks/useFetch"

export default function History(){
    const {user, setUser} = useContext(UserContext)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error,setError] = useState(null)


    useEffect(()=>{
        if (user.isLogged) {
            const url = `http://localhost:5000/history/${user.infos._id}`

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
    },[user])
    

    return(
        <>
            {user.isLogged && (<div>
                <h1>Historique de {user.infos.firstName} {user.infos.lastName}</h1>
                    {!loading && data !== null &&data.map((room) => {
                        room.calendar.map((day) => {
                            day.time.AM.userId === user.infos._id && <p>{room.roomId}</p>
                        })
                            
                        })}
            </div>)}
        </>
    )
}