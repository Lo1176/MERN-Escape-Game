export default function FormSignIn({}) {
    
    return(
        <div className="form-box p-2">
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="votreemail@gmail.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="*********"/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Se connecter</button>
            </form>
        </div>
    )
}