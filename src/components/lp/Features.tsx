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
    list: [
      "Kataru's prompts are story-driven.",
      "Hand-crafted to lead you through your story.",
      "One step at a time.",
    ],
  },
  {
    id: 3,
    title: "3. Start crafting your story",
    img: "/img/hero/hero3.png",
    list: [
      "Word by word, it's time to craft your masterpiece",
      "With each line, your story grows",
      "And we'll be there all the way.",
    ],
  },
  {
    id: 4,
    title: "4. Unlock achievements!",
    img: "/img/hero/hero4.png",
    list: [
      "Finish stories to earn badges.",
      "Build writing streaks and track your data",
      "Grow your library FTW!",
    ],
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
