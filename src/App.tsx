import "./sass/main.scss";

// JSX image import
import doc from "./img/icons/doc.png";

function App() {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__nav">
          <a href="#" className="hero__nav--link">
            Sign me up!
          </a>
          <img
            src={doc}
            alt="Image of a colourful pencil"
            className="hero__nav--img"
          />
        </div>
        <div className="hero__main">
          <h1 className="hero__heading-primary">
            <span className="hero__heading-primary--main">Kataru::</span>
            <span className="hero__heading-primary--sub">
              Create <span className="u-highlight-2">your</span> masterpiece
            </span>
          </h1>
          <h2 className="hero__heading-secondary">
            &rarr; One prompt at a time
          </h2>
        </div>
        <div className="hero__detail">
          <p className="hero__detail--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            blanditiis quasi corporis fugit pariatur alias totam, dolor,
            possimus nostrum, at facilis? Officia vel voluptas laborum quae
            rerum tempore quam laboriosam?
          </p>
        </div>
      </div>
      <div className="hero__right"></div>
    </section>
  );
}

export default App;
