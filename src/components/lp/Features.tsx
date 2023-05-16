import FeatureCard from "./FeatureCard";

// Static content for feature cards
const FEATURES_DATA = [
  {
    id: 1,
    title: "Choose a genre:",
    img: "/img/hero/hero1.png",
    text: "This is some test content. For example, choose your story!",
  },
  {
    id: 2,
    title: "Choose a story:",
    img: "/img/hero/hero2.png",
    text: "This is some test content. For example, choose your story!",
  },
  {
    id: 3,
    title: "Use prompts to write:",
    img: "/img/hero/hero3.png",
    text: "This is some test content. For example, choose your story!",
  },
  {
    id: 4,
    title: "Complete your masterpiece!",
    img: "/img/hero/hero4.png",
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
              key={feature.id}
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
