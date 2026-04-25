import Header from "./Header";
import Skills from "./Skills";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Certifications from "./Certifications";
import Achievements from "./Achievements";

const Home = () => {
  return (
    <>
      <Header />
      <div className="space-y-8">
        <section className="animate-slideInUp">
          <WorkExp />
        </section>
        <section className="animate-slideInUp" style={{ animationDelay: "0.1s" }}>
          <Skills />
        </section>
        <section className="animate-slideInUp" style={{ animationDelay: "0.2s" }}>
          <Achievements />
        </section>
        <section className="animate-slideInUp" style={{ animationDelay: "0.3s" }}>
          <Certifications />
        </section>
        <section className="animate-slideInUp" style={{ animationDelay: "0.4s" }}>
          <Education />
        </section>
      </div>
    </>
  );
};

export default Home;
