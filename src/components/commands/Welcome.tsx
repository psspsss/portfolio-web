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

// ASCII Art for the illustration section:
/*
                                       Z             
                       Z                   
        .,.,        z           
      (((((())    z             
     (('_  _`) '               
     ((G   \ |)                 
    (((`   " ,                  
     .((\.:~:          .--------------.    
     __.| `"'.__      | \              |     
  .~~   `---'   ~.    |  .             :     
 /                `   |   `-.__________)     
|             ~       |  :             :   
|                     |  :  |              
|    _                |     |   [ ##   :   
 \    ~~-.            |  ,   oo_______.'   
  `_   ( \) _____/~~~~ `--___              
  | ~`-)  ) `-.   `---   ( - a:f -         
  |   '///`  | `-.                         
  |     | |  |    `-.                      
  |     | |  |       `-.                   
  |     | |\ |                             
  |     | | \|                             
   `-.  | |  |                             
      `-| '
*/

const asciiArt = `
                                       Z             
                       Z                   
        .,.,        z           
      (((((())    z             
     (('_  _\`) '               
     ((G   \\ |)                 
    (((\`   " ,                  
     .((\\.:~:          .--------------.    
     __.| \`"'.__      | \\              |     
  .~~   \`---'   ~.    |  .             :     
 /                \`   |   \`-.__________)     
|             ~       |  :             :   
|                     |  :  |              
|    _                |     |   [ ##   :   
 \\    ~~-.            |  ,   oo_______.'   
  \`_   ( \\) _____/~~~~ \`--___              
  | ~\`-)  ) \`-.   \`---   ( - a:f -         
  |   '///\`  | \`-.                         
  |     | |  |    \`-.                      
  |     | |  |       \`-.                   
  |     | |\\ |                             
  |     | | \\|                             
   \`-.  | |  |                             
      \`-| '
`;

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        



       _             _       
      (_)           (_)      
 _   _ _ ____  _____ _________ 
| | | | |  _ \\|   _ \\| | ___ |
 \\ V /| | | | | | | || | ____|
  \\_/ |_|_| |_|_| |_||_|_____)


   `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
        _             _       
      (_)           (_)      
 _   _ _ ____  _____ _________ 
| | | | |  _ \\|   _ \\| | ___ |
 \\ V /| | | | | | | || | ____|
  \\_/ |_|_| |_|_| |_||_|_____)
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
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
