import AppHero  from "../../components/Home/Hero";
import AppAbout from "../../components/Home/About.js";
import AppMain from "../../components/Home/Main"
function Home() {
  return (
    <div>
      <AppHero />
      <AppMain/>
      <AppAbout/>
    </div>
  );
}

export default Home;
