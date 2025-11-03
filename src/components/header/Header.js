import { Component } from "react";

class Header extends Component {
  render() {
    const pages = [
      { name: "Features",id:1 },
      { name: "Enterprise",id:2 },
      { name: "Support",id:3 },
      { name: "Pricing",id:4 },
    ];
    return (
      <nav className="">
        <div className="navbar navbar-expand px-4 py-3 d-flex justify-content-between  shadow border-bottom  ">
          <a href="/" className="navbar-brand fw-bold">
            {" "}
            Start Bootstrap
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav d-flex ">
              {pages.map((item) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <a className="nav-link" href="/">
                        {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="btn ms-4 btn-outline-primary">Sign up</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
