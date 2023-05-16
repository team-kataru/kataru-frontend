import FeatureCard from "./FeatureCard";

function Features() {
  return (
    // id for scrolling link
    <section id="about-scroll" className="features">
      <h2 className="features__title">HOW DOES IT WORK?</h2>
      <div className="features__grid">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  );
}

export default Features;
