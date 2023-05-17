import FeatureCard from "./FeaturesCard";

// Static content for feature cards
const FEATURES_DATA = [
  {
    id: 1,
    title: [
      { text: "1. Select your ", color: "#555" },
      { text: "genre", color: "#3a86ff" },
    ],
    img: "/img/feature/duo.png",
    text: "To get started, choose a genre that tickles your fancy. We have them all. Give your story a name (you can change this later),  and you're all ready to begin :-)",
  },
  {
    id: 2,
    title: [
      { text: "2. Receive your first ", color: "#555" },
      { text: "prompt", color: "#ff006eff" },
    ],
    img: "/img/feature/astronauts.png",
    text: "Kataru's prompts are story-driven and hand-crafted, designed to lead you from the beginning to the end of your magnum opus. One step at a time.",
  },
  {
    id: 3,
    title: [
      { text: "3. Start crafting ", color: "#555" },
      { text: "your story", color: "#ffbe0bff" },
      { text: " :-)", color: "#555" },
    ],
    img: "/img/feature/temples.png",
    text: "It's time to craft your masterpiece, word by word. With each line, your story will begin to take shape. And we'll be there, giving you ideas to inspire your narrative and help you continue your journey, every step of the way.",
  },
  {
    id: 4,
    title: [
      { text: "4. Unlock ", color: "#555" },
      { text: "achievements", color: "#fb5607ff" },
    ],
    img: "/img/feature/mountains.png",
    text: "Finish stories, build streaks, and grow your library of tales to earn achievements and badges!",
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
