import FeatureCard from "./FeatureCard";

// Static content for feature cards
const FEATURES_DATA = [
  {
    title: "This is a test title",
    img: "/img/hero/",
    text: "This is some test content. For example, choose your story!",
  },
  {
    title: "This is another test title",
    img: "/img/hero/",
    text: "This is some test content. For example, choose your story!",
  },
  {
    title: "This is a third test title",
    img: "/img/hero/",
    text: "This is some test content. For example, choose your story!",
  },
  {
    title: "This is a fourth test title",
    img: "/img/hero/",
    text: "This is some test content. For example, choose your story!",
  },
];

function Features() {
  return (
    // id for scrolling link
    <section id="about-scroll" className="features">
      <h2 className="features__title">HOW DOES IT WORK?</h2>
      <div className="features__grid">
        {FEATURES_DATA.map((feature) => {
          return (
            <FeatureCard
              title={feature.title}
              img={feature.img}
              text={feature.text}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
