import { useState,  useEffect } from "react"
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function FormSignIn({}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    
    const urlVerification = `http://localhost:5000/login`
    const navigate = useNavigate();
    
    const handleConnexion = async (e) => {
        e.preventDefault()
        let fetchParams = {
            method: "POST",
            mode: 'cors',
            // cache: "no-store",
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
          } 
        fetch(urlVerification,fetchParams)
            .then(res => {
                return res.json()})
            .then(dt => {
                window.localStorage.setItem("token", dt.token)
                // window.localStorage.getItem("token") === "token ok" &&
                //   navigate("/");
            })
            .catch (err => console.log(err))
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