import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      name: "Cloud Domain",
      desc: "Cloud Domain is a web application that provides cloud-based domain registration services. It allows users to search for available domains, register them, and manage their domain settings seamlessly.",
      img: "Screenshot (464).png",
      live_link: "https://abhified.netlify.app/",
      git_link: "https://github.com/KenChicken007/Abhify-v2",
    },
    {
      name: "Huddle",
      desc: "Huddle is a collaborative project management platform designed to streamline team communication and project coordination. With features like shared workspaces, real-time messaging, and task tracking, Huddle keeps your team organized and focused.",
      img: "Screenshot (465).png",
      live_link: "https://zesty-biscotti-c820f1.netlify.app/",
      git_link: "https://github.com/KenChicken007/Styled_components",
    },
    {
      name: "Planets",
      desc: "Planets is an interactive web application that provides information about planets in our solar system. Users can explore details about each planet, view images, and learn interesting facts about our cosmic neighbors.",
      img: "Screenshot (466).png",
      live_link: "https://silver-lokum-39f6f1.netlify.app/",
      git_link: "https://github.com/KenChicken007/Framer",
    },
    {
      name: "Pokedex",
      desc: "Pokedex is a comprehensive Pokemon encyclopedia that allows users to explore details about various Pokemon species. Users can search for their favorite Pokemon, view their characteristics, and learn more about the Pokemon universe.",
      img: "Screenshot (467).png",
      live_link: "https://jolly-llama-c1e180.netlify.app/",
      git_link: "https://github.com/KenChicken007/Pokedex",
    },
  ];

  const iconStyle = {
    fontSize: "30px",
    color: "#ab261f",
  };

  return (
    <div id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-outline">
            <div className="project-img">
              <img src={proj.img} alt="Website Preview" />
            </div>
            <div className="project-info">
              <h3>{proj.name}</h3>
              <div className="project-icons">
                <a href={proj.git_link}>
                  <FaGithub style={iconStyle} />
                </a>
                <a href={proj.live_link}>
                  <TbWorld style={iconStyle} />
                </a>
              </div>
            </div>
            <div className="project-desc">
              <p>{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
