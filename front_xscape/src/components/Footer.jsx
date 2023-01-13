import logo from "../assets/images/logo-esc.png"

export default function Footer({}) {
    
    return (
      <footer className="bg-dark text-light p-1">
        <div className="container-fluid m-2">
          <div className="row justify-content-center mt-3">
            <div className="col-lg-3 text-center">
              <img className="logo-footer" src={logo} alt="" />
              <div className="container pt-5">
                <a>Home</a> |<a> Blog</a> |<a> Pricing</a> |<a> About</a> |
                <a> FAQ</a> | <a> Contact</a>
              </div>
            </div>

            <div className="col-lg-3 mt-2 text-left">
              <p>
                <a href="" className="text-primary">
                  5 rue du Faubourg Saint Honoré
                </a>
              </p>
              <p>75008, Paris</p>
              <p>+33 1 42 92 81 00</p>
              <p>
                <a href="" className="text-primary">
                  contact@Xscape.com
                </a>
              </p>
            </div>

            <div className="col-lg-5">
              <p className="text-uppercase fw-bold">A propos</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                dolore quod. Vel, autem facilis? Ipsam harum quod quae error
                odit a nobis, autem, excepturi eaque, obcaecati repellat facilis
                vel nam. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Veniam aspernatur perferendis in earum commodi ut
                provident vero, deleniti architecto reprehenderit, laudantium
                praesentium, excepturi cupiditate voluptatem. Velit illo non at
                eaque.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-4">
          Copyright ©<a className="text-reset fw-bold">SLI & SYL </a>
          2022.
        </div>
      </footer>
    );
}