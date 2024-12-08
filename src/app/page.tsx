import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import FoodCategory from "./Components/FoodCategory/FoodCategory";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Menu from "./Components/Menu/Menu";
import Chef from "./Components/Chef/Chef";
import Blog from "./Components/Blog/Blog";

export default function Home() {
  return (
    <>
    <div>
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChooseUs/>
      <Menu/>
      <Chef/>
      <Blog/>
      </div>
    </>
  );
}
