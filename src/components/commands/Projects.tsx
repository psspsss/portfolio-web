import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Me having to come up with a project is a failure of the world"- Linus Torvalds<br />
        Here are some of my projects you SHOULD miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "lambchat",
    desc: "- A real time chat application to share thoughts and experiences with your friends.",
    url: "https://github.com/psspsss/realtime-chat-app",
  },
  {
    id: 2,
    title: "Conways-Game of Life",
    desc: "An ecommerce web application where users can browse various products and make purchases.",
    url: "https://github.com/psspsss/cnways-gol?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Ascii Video Animation",
    desc: "An animated ascii art of me doing kickflips",
    url: "https://github.com/psspsss/ascii-video-animation-art",
  },
  {
    id: 4,
    title: "Discord-Bot",
    desc: "A minimal, discord bot I made in memory of my dear friend debanjan ",
    url: "https://github.com/psspsss/discord-bot",
  },
];

export default Projects;
