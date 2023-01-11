import { useState } from "react"
import useFetch from "../../hooks/useFetch"

export default function FormSignUp({}) {
    // const urlSignUp = `http://localhost:${process.env.DB_port}/users/add`

    const urlSignUp = `http://localhost:5000/users/add`
    // const urlVerification = `http://localhost:5000/users`

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")


    
    const  handleSubmit = (e) => {
        e.preventDefault()
        let fetchParams = {
            method: "POST",
            mode: 'cors',
            // cache: "no-store",
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({
                firstName:firstName,
                lastName:lastName,
                email: email,
                password:password,
                birthdate:birthdate})
          } 
        fetch(urlSignUp, fetchParams)
            .then(res => {
                return res.json()})
            .then(dt =>
                console.log(dt)
            )
            .catch (err => console.log(err))
        // const {data }= useFetch(urlSignUp,"POST", {
        //     firstName:firstName,
        //     lastName:lastName,
        //     email: email,
        //     password:password,
        //     birthdate:birthdate})
        // const {data, loading, error}=useFetch("http://localhost:5000/users","GET")
        // console.log(data);
    }
    

    return(
        <div className="form-box p-2">
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                    <div className="container form-group p-0">
                        <label htmlFor="firstName">Prénom</label>
                        <input 
                            type="text" 
                            className="
                            form-control" 
                            id="firstName" 
                            placeholder="Prénom" 
                            value={firstName}
                            onChange={(e)=> {setFirstName(e.target.value)}
                            }
                            required={true}/>
                    </div>
                    <div className="container form-group p-0">
                        <label htmlFor="lastName">Nom</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            placeholder="Nom"
                            value={lastName}
                            onChange={(e)=> {setLastName(e.target.value)}
                            }
                            required={true}/>
                    </div>
                </div>
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
                    <small id="emailHelp" className="form-text text-muted">Nous ne partagerons pas ces informations.</small>
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

                <div className="form-group">
                    <label> Veuillez saisir votre date de naissance :</label>
                    <input 
                        type="date" 
                        className="form-control"
                        id="birthdate"
                        value={birthdate}
                        onChange={(e)=> {setBirthdate(e.target.value)}
                        }
                        required={true}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">S'inscrire</button>
            </form>
        </div>
    )
}