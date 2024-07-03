import TransitionComponent from "../../components/TransitionComponent/TransitionComponent";
import SectionAbout from "./About/SectionAbout";
import FClasses from "./FClasses/FClasses";
import Lander from "./Lander/Lander";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Lander />
      <FClasses />
      <SectionAbout />
      <Testimonials />
    </>
  );
}


export default TransitionComponent(Home);