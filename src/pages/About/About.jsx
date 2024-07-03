import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/caro1.jpg";
import TransitionComponent from "../../components/TransitionComponent/TransitionComponent";
const About = () => {
  return (
    <div className="flex w-full mt-nav flex-col">
      <div className="w-full bg-gray-100 p-8">
        <span className="w-full flex flex-col text-3xl font-bold">
          <span className="font-roboto">
            Introduction <i className="fas fa-code"></i>
          </span>
          <span className="w-full bg-[linear-gradient(90deg,#16157a_0%,#16157a_50%)] h-1"></span>
        </span>
        <div className="flex flex-row gap-4 py-4">
          <div className="w-1/2 text-justify flex flex-col gap-4">
            <p>
              We are coding technology and as the name suggests we provide
              training on coding and technological sectors. We are aimed towards
              anyone; starters, beginners to individuals who had a career in IT.
            </p>
            <p>
              We are dedicated to addressing the challenges faced by students
              aspiring to build careers in Information Technology. Our
              institution focuses on providing high-quality education that
              mirrors the practices and knowledge utilized in professional
              software development. We offer a range of premier IT courses in
              Nepal, including software training, internships, and development
              programs, all designed to impart a thorough understanding of the
              Software Development Life Cycle (SDLC).
            </p>
            <p>
              Our goal is to ensure that upon completing our programs, students
              possess the skills and expertise equivalent to 2-3 years of
              industry experience. We also emphasize the development of
              leadership skills and offer lifetime support to our students,
              fostering their growth and success in the IT sector.
            </p>
          </div>
          <img
            src={aboutImage}
            className="w-1/2 object-cover"
            alt="codingtechimg"
          />
        </div>
      </div>
      <div className="w-full bg-white p-8">
        <span className="w-full flex flex-col text-3xl font-bold">
          <span className="font-roboto">
            Other Info <i className="far fa-address-card"></i>
          </span>
          <span className="w-full bg-[linear-gradient(90deg,#16157a_0%,#16157a_50%)] h-1"></span>
        </span>
        <div className="flex flex-row gap-4 py-4 flex-wrap">
          <div className="w-[calc(50%-0.5px-1rem)] text-justify flex flex-col">
            <span className="font-roboto text-xl font-bold">Location</span>
            <p>
              We are located at Balkumari, Koteshwor in Kathmandu, Nepal. We are
              a hundred meters away from ring road; walking towards narephant
              from the said bridge will lead you towards coding technology. We
              are located in uptown building, and said building is opposite to
              CCRC. In the uptown building, coding technology can be found at
              the second floor.
            </p>
          </div>
          <div className="w-[1px] rounded-full min-h-full flex bg-indigo-600"></div>
          <div className="w-[calc(50%-0.5px-1rem)] text-justify flex flex-col">
            <span className="font-roboto text-xl font-bold">Course Details</span>
            <p>
              We offer support in urgent times with our fast-paced classes, and
              provide in-depth knowledge with our slow-paced classes. Our
              specialty is helping people pursue and build a career in the field
              they desire. For those looking to study abroad, our fast-paced
              classes can be especially beneficial. We also provide personalized
              guidance to ensure your success.
            </p>
          </div>
          <div className="w-[calc(50%-0.5px-1rem)] text-justify flex flex-col">
            <span className="font-roboto text-xl font-bold">Availability</span>
            <p>
              We are available from 6:00 am to 7:00 pm for all your needs and
              inquiries. If you need to reach us outside of these hours, don't
              worry! Our team is available 24/7 via email and phone to ensure
              you get the support you need, whenever you need it. Additionally,
              you can contact us anytime on WhatsApp at +977 9801119050 for
              quick responses and assistance.
            </p>
          </div>
          <div className="w-[1px] rounded-full min-h-full flex bg-indigo-600"></div>
          <div className="w-[calc(50%-0.5px-1rem)] text-justify flex flex-col">
            <span className="font-roboto text-xl font-bold">Contact</span>
            <div>
              You can contact us on{" "}
              <Link
                to="mailto:info@codingtechnology.com.np"
                className="underline decoration-gray-400"
              >
                email
              </Link>{" "}
              or alternatively you can call us on{" "}
              <Link
                to="tel:9801119050"
                className="underline decoration-gray-400"
              >
                phone number
              </Link>
              {"\n"}
              Or, {"\n"}
              Contact us on our{" "}
              <Link to="tel:15100788" className="underline decoration-gray-400">
                telephone
              </Link>
              <div className="flex flex-col">
                <Link to="tel:9801119050" className="underline">
                  (+977) 9801119050
                </Link>
                <Link to="tel:15100788" className="underline">
                  (+977) 1-5100788
                </Link>
                <Link
                  to="mailto:info@codingtechnology.com.np"
                  className="underline"
                >
                  info@codingtechnology.com.np
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransitionComponent(About);
