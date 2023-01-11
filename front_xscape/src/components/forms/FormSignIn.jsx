import { useState } from "react"

export default function FormSignIn({}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    const urlVerification = `http://localhost:5000/users/${email}`

    const handleConnexion = async (e) => {
        e.preventDefault()
        
        // const data = await fetch(urlVerification)
        //     .then(res => {
        //         return res.json()})
        //     .then(dt =>
        //         console.log(dt)
        //     )
        //     .catch (err => console.log(err))

        // password === data.password ? alert("connexion réussie") : alert("connexion échouée")
    }

    return(
        <div className="form-box p-2">
            <form onSubmit={handleConnexion}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="votreemail@gmail.com"
                        value={email}
                            onChange={(e)=> {setEmail(e.target.value)}
                            }
                            required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="*********"
                        value={password}
                            onChange={(e)=> {setPassword(e.target.value)}
                            }
                            required={true}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Se connecter</button>
            </form>
        </div>
    )
}