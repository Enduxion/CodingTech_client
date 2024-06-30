import SectionAbout from "./About/SectionAbout";
import FClasses from "./FClasses/FClasses";
import Lander from "./Lander/Lander";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Lander />
      <FClasses />
      <SectionAbout />
      <Testimonials />
    </>
  );
}
