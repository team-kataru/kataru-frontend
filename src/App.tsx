import "./sass/main.scss";
import girl from "./img/girl_reader.png";

function App() {
  return (
    <div className="container">
      <h1>Kataru!</h1>
      <img src={girl} style={{ maxWidth: "50%" }} alt="girl reading" />
    </div>
  );
}

export default App;
