import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import Slider from "../components/Home/Slider";
// import News from '../components/Home/News'
import Products from "../components/Home/Products";
import Reviews from "../components/Home/Reviews";
import Services from "../components/Home/Services";
import Badges from "../components/Home/Badges";
import Client from "../components/Home/Client";

const Home = () => {
  return (
    <div>
      <Hero />
      <Badges />
      <Slider />
      <Intro />
      <Slider />
      <Services />
      <Products />
      {/* <News /> */}
      <Reviews />
      <Client />
    </div>
  );
};

export default Home;
