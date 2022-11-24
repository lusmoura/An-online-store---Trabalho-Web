import tshirt from "../../assets/t-shirt.png";

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="grid grid-main">
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 1</h2>
            <p>R$ XX,YY</p>
          </div>
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 2</h2>
            <p>R$ XX,YY</p>
          </div>
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 3</h2>
            <p>R$ XX,YY</p>
          </div>
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 4</h2>
            <p>R$ XX,YY</p>
          </div>
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 5</h2>
            <p>R$ XX,YY</p>
          </div>
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 6</h2>
            <p>R$ XX,YY</p>
          </div>
          <div className="container grid-item">
            <img src={tshirt} alt="t-shirt" />
            <h2>Camiseta 7</h2>
            <p>R$ XX,YY</p>
          </div>
        </div>
      </main>
    </>
  );
}
