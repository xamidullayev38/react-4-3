import "./App.css";

import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      {/* header started */}
      <Header />
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
      {/* cards started */}
      <Cards />
      <Footer />
    </>
  );
}

export default App;
