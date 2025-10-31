import "./App.css";

function App() {
  return (
    <>
      <nav className="">
        <div className="navbar navbar-expand px-4 py-3 d-flex justify-content-between  shadow border-bottom  ">
          <h3 className="navbar-brand"> Start Bootstrap</h3>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav d-flex ">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
            <button className="btn ms-4 btn-outline-primary">Sign up</button>
          </div>
        </div>
      </nav>
      <section className="hero">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center py-5">
            <h1 className="fw-light mb-2">Pricing</h1>
            <p className="col-7 fw-light text-center fs-4">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It's built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
        </div>
      </section>
      <section className="cards col-9 d-flex justify-content-center align-align-items-center my-5 mx-auto gap-5">
        <div className="card shadow col-3">
          <div className="card-header">
            <h2 className="text-center fs-5 fw-bold">Free</h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <p className=" text-center fs-3 my-3">
              $0 <span className="text-body-tertiary">/ mo</span>
            </p>
            <ul className="list-unstyled mb-4 text-center">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn btn-outline-primary">
              Sign up for free
            </button>
          </div>
        </div>
        <div className="card shadow col-3">
          <div className="card-header">
            <h2 className="text-center fs-5 fw-bold">Free</h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <p className=" text-center fs-3 my-3">
              $0 <span className="text-body-tertiary">/ mo</span>
            </p>
            <ul className="list-unstyled mb-4 text-center">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="card shadow col-3">
          <div className="card-header">
            <h2 className="text-center fs-5 fw-bold">Free</h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <p className=" text-center fs-3 my-3">
              $0 <span className="text-body-tertiary">/ mo</span>
            </p>
            <ul className="list-unstyled mb-4 text-center">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn btn-primary">Contact us</button>
          </div>
        </div>
      </section>

      <footer className="container py-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2017–2018</small>
          </div>

          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
