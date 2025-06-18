import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Vinayak Majhi</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in New Delhi,
        India.
      </p>
      <p>
        I am passionate about learning new stuff <br />
        that could be anything from tools & skills for webpages <br />
        to making music or landing new tricks on my skateboard.
      </p>
    </AboutWrapper>
  );
};

export default About;
