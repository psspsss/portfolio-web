import styled, { useTheme } from "styled-components";

const Caret = styled.span<{ color: string }>`
  display: inline-block;
  width: 0.65em;
  height: 1.2em;
  vertical-align: bottom;
  background: ${({ color }) => color};
  opacity: 0.8;
  animation: blink 1s steps(1) infinite;

  @keyframes blink {
    0%,
    50% {
      opacity: 0.8;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`;

interface BlockCaretProps {
  position: number;
  value: string;
}

const BlockCaret: React.FC<BlockCaretProps> = ({ position, value }) => {
  const theme = useTheme();
  const caretColor = theme?.colors?.primary || "#ffffff";

  const before = value.slice(0, position);
  const at = value[position] || " ";
  const after = value.slice(position + 1);

  return (
    <span style={{ fontFamily: "inherit", fontSize: "inherit" }}>
      {before}
      <Caret color={caretColor}>{at}</Caret>
      {after}
    </span>
  );
};

export default BlockCaret;
