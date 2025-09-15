import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";
import styled from "styled-components";

const asciiArt = `
                                     .
              ,-.       _,---._ __  / \\
             /  )    .-'       \`./ /   \\
            (  (   ,'            \`/    /|
             \\  \`-"             '\\\\   / |
              \`.              ,  \\ \\ /  |
               /\`.          ,'-\`----Y   |
              (            ;        |   '
              |  ,-.    ,-'         |  /
              |  | (   |            | /
              )  |  \\  \`.___________|/
              \`--'   \`--'
`;

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        

          
      
              ███                         ███          
             ░░░                         ░░░           
 █████ █████ ████  ████████   ████████   ████   ██████ 
░░███ ░░███ ░░███ ░░███░░███ ░░███░░███ ░░███  ███░░███
 ░███  ░███  ░███  ░███ ░███  ░███ ░███  ░███ ░███████ 
 ░░███ ███   ░███  ░███ ░███  ░███ ░███  ░███ ░███░░░  
  ░░█████    █████ ████ █████ ████ █████ █████░░██████ 
   ░░░░░    ░░░░░ ░░░░ ░░░░░ ░░░░ ░░░░░ ░░░░░  ░░░░░░  

   `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`


.%%..%%.%%%%%%.
.%%..%%...%%...
.%%..%%...%%...
..%%%%....%%...
...%%...%%%%%%.
...............
.%%..%%.%%..%%.
.%%%.%%.%%%.%%.
.%%.%%%.%%.%%%.
.%%..%%.%%..%%.
.%%..%%.%%..%%.
...............
.%%%%%%.%%%%%%.
...%%...%%.....
...%%...%%%%...
...%%...%%.....
.%%%%%%.%%%%%%.
...............



          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          hi, I'm Vinayak Majhi <br /> Welcome to my kitty terminal. (Version
          1.5.5)
        </div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/psspsss/portfolio-web">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type <Cmd>help</Cmd>.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>{asciiArt}</PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

const PreImg = styled.pre`
  font-family: "Fira Code", monospace;
  font-size: 1.1rem;
  max-width: 480px;
  width: 100%;
  overflow-x: auto;
  margin: 0;
  background: none;
  border: none;
  box-shadow: none;
  padding: 0;
`;
