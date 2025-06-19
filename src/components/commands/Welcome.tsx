import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";


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

          
       _             _       
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

             `
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
        <div>hi, I'm Vinayak Majhi <br/> Welcome to my kitty terminal. (Version 1.3.1)</div>
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
        <PreImg>
          {asciiArt}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
