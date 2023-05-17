import FeatureCard from "./FeaturesCard";

// Static content for feature cards
const FEATURES_DATA = [
  {
    id: 1,
    title: "1. Select your genre",
    img: "/img/hero/hero1.png",
    list: [
      "To get started, choose your favourite genre.",
      "We have them all, from SF to Fairytale.",
      "Name your story, and you're ready to go!",
    ],
  },
  {
    id: 2,
    title: "2. Receive your first prompt",
    img: "/img/hero/hero2.png",
    list: ["line1", "line2", "line3"],
  },
  {
    id: 3,
    title: "3. Start crafting your story",
    img: "/img/hero/hero3.png",
    list: ["line1", "line2", "line3"],
  },
  {
    id: 4,
    title: "4. Unlock achievements!",
    img: "/img/hero/hero4.png",
    list: ["line1", "line2", "line3"],
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
              list={feature.list}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
