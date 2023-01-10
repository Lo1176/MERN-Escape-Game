import logo from "../assets/images/logo-esc.png"

export default function Footer({}) {
    
    return(
        <footer className="bg-dark text-light p-1">

            <div className="container  m-2">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                        <img className="logo-footer" src={logo} alt="" />
                        <div className="container pt-5">
                            <a>Home</a> | 
                            <a> Blog</a> | 
                            <a> Pricing</a> | 
                            <a> About</a> | 
                            <a> FAQ</a> | <a> Contact</a>
                        </div>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-left">
                        <p>
                            <a href="" className="text-blue">5 rue du Faubourg Saint Honoré
                            </a></p>
                        <p>75008, Paris</p>
                        <p>+33 1 42 92 81 00</p>
                        <p>
                            <a href="" className="text-blue">contact@Xscape.com</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <p className="text-uppercase fw-bold mb-4">A propos</p>
                        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, dolore quod. Vel, autem facilis? Ipsam harum quod quae error odit a nobis, autem, excepturi eaque, obcaecati repellat facilis vel nam.</p>
                    </div>

                </div>

            </div>

            <div className="text-center p-4" >
                Copyright © 
                <a className="text-reset fw-bold" >SLI & SYL </a>
                2022.
            </div>

        </footer>

    )
}