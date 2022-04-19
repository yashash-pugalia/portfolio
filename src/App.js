import {
  FaPython,
  FaJs,
  FaReact,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaHtml5,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

import { ProjectCard } from "./components/Projects/ProjectCard.js";
import projectData from "./components/Projects/data.json";

import "./style.scss";

export default function App() {
  return (
    <>
      <h1>asdfasdf</h1>
      <nav>
        <h1>Yashash</h1>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a
          href="http://github.com/yashash1511"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a href="mailto:yashash1511@gmail.com" target="_blank" rel="noreferrer">
          Contact
        </a>
      </nav>
      <main>
        <section id="about">
          <h2>About</h2>
          <div className="abCont">
            <div className="about cardBox">
              <h3>Hi, I am Yashash. 👋</h3>
              <p>I am a 17 years old student from New Delhi, India.</p>
              <p>
                Want to contact?{" "}
                <a
                  href="mailto:yashash1511@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  email me
                </a>
              </p>
              <p>Have Discord? Will travel! - Yashash#6681</p>
            </div>
            <div className="skills cardBox">
              <h3>Languages {`&&`} Tools</h3>
              <p>
                <FaPython color="4584b6" /> Python
              </p>
              <p>
                <SiMysql color="00758f" /> MySQL
              </p>
              <p>
                <FaJs color="f7df1e" /> Javascript,
                <FaReact color="00d8ff" /> ReactJS
              </p>
              <p>
                <FaCss3 color="264de4" /> CSS,
                <FaSass color="c69" /> SASS,
                <SiTailwindcss color="38bdf8" /> Tailwind,
                <FaBootstrap color="7952b3" /> Bootstrap
              </p>
              <p>
                <FaHtml5 color="e34f26" /> HTML
              </p>
              <p>
                <FaGitAlt color="f1502f" /> Git,
                <FaGithub color="333" /> Github
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projectCont">
            {Object.keys(projectData).map((e) => {
              return <ProjectCard title={e} {...projectData[e]} />;
            })}
          </div>
        </section>
      </main>
      <footer>
        Made with ❤️ in India by Yashash{" "}
        <a
          href="https://github.com/yashash1511"
          target="_blank"
          rel="noreferrer"
        >
          (yashash1511)
        </a>
      </footer>
    </>
  );
}
