import { Component } from "react";

class Cards extends Component {
  render() {
    const cards = [
      {
        id:1,
        subs: "free",
        price: 0,
        userAmount: 10,
        storage: 2,
        support: "email",
        access: "help center",
      },
      {
        id:2,
        subs: "pro",
        price: 25,
        userAmount: 20,
        storage: 10,
        support: "priority email",
        access: "help center",
      },
      {
        id:3,
        subs: "enterprise",
        price: 29,
        userAmount: 30,
        storage: 15,
        support: "phone and email",
        access: "help center",
      },
    ];
    return (
      <section className="cards col-9 d-flex justify-content-center align-align-items-center my-5 mx-auto gap-5">
        {cards.map((item) => {
          return (
            <div className="card shadow col-3" key={item.id}>
              <div className="card-header">
                <h2 className="text-center fs-5 fw-bold">{item.subs.toUpperCase()}</h2>
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <p className=" text-center fs-3 my-3">
                  $ {item.price} <span className="text-body-tertiary">/ mo</span>
                </p>
                <ul className="list-unstyled mb-4 text-center">
                  <li>{item.userAmount} users included</li>
                  <li>{item.storage} GB of storage</li>
                  <li>{item.support.toUpperCase()} support</li>
                  <li>{item.access.toUpperCase()} access</li>
                </ul>
                <button className="btn btn-outline-primary">
                  Sign up for free
                </button>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Cards;
