export default function FormSign({}) {
    
    return(
        <form>
            <div className="form-group d-flex p-2 justify-content-center">
                <div>
                    <label htmlFor="firstName">Prénom</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        placeholder="Prénom"/>
                </div>
                <div>
                    <label htmlFor="lastName">Nom</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        placeholder="Nom"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="votreemail@gmail.com"/>
                <small id="emailHelp" className="form-text text-muted">Nous ne partagerons pas ces informations.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="*********"/>
            </div>
            <button type="submit" className="btn btn-primary">S'inscrire</button>
        </form>
    )
}