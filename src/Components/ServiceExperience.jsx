import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const RedOutlineBox = ({ children }) => {
  return <div className="red outline">{children}</div>;
};

const BlackOutlineBox = ({ children, main }) => {
  return <div className="outline">{children}</div>;
};

const ServiceExperience = () => {
  return (
    <>
      <div id="services">
        <BlackOutlineBox>
          <MdOutlineWeb color="red" size="40px" />
          <h2>Web Development</h2>
          <p>
            Get Responsive and mobile first websites with pixel perfect design
            and fast performance
          </p>
          <a href="">Know More</a>
        </BlackOutlineBox>

        <RedOutlineBox>
          <MdOutlineDesignServices size="40px" />
          <h2>UI Design</h2>
          <p>
            Get amazing design custom built for your specific needs, whether it
            be classical or modern
          </p>
          <a href="">Know More</a>
        </RedOutlineBox>

        <BlackOutlineBox>
          <MdOutlinePhoneInTalk color="red" size="40px" />
          <h2>Consultation</h2>
          <p>
            Confused about the options and need to figure out the best way
            forward, let's have a talk and figure it out
          </p>
          <a href="">Know More</a>
        </BlackOutlineBox>
      </div>

      <div id="experience">
        <div className="experience-section">
          <h1 className="red-text" style={{ fontSize: "5rem" }}>
            1
          </h1>
          <h2>Year Experience</h2>
        </div>
        <div className="experience-section">
          <BlackOutlineBox>
            <h2 className="red-text">3+</h2>
            <p>Clients</p>
          </BlackOutlineBox>
          <BlackOutlineBox>
            <h2 className="red-text">5+</h2>
            <p>Completed Projects</p>
          </BlackOutlineBox>
        </div>
        <div className="experience-section">
          <BlackOutlineBox>
            <h2 className="red-text">1</h2>
            <p>freelance experience</p>
          </BlackOutlineBox>
          <BlackOutlineBox>
            <h2 className="red-text">5</h2>
            <p>Achievements</p>
          </BlackOutlineBox>
        </div>
      </div>
    </>
  );
};

export default ServiceExperience;
