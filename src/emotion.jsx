import styled from "@emotion/styled";

const Shade = styled.div`
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(150deg, rgba(0, 0, 0, 0.65), transparent);
`;

const BlackBoard = styled.div`
  width: 640px;
  margin: 5em auto;
  border: tan solid 12px;
  border-top: #bda27e solid 12px;
  border-left: #b19876 solid 12px;
  border-bottom: #c9ad86 solid 12px;
  box-shadow: 0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782,
    0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5);
  background-image: radial-gradient(
      circle at left 30%,
      rgba(34, 34, 34, 0.3),
      rgba(34, 34, 34, 0.3) 80px,
      rgba(34, 34, 34, 0.5) 100px,
      rgba(51, 51, 51, 0.5) 160px,
      rgba(51, 51, 51, 0.5)
    ),
    linear-gradient(
      215deg,
      transparent,
      transparent 100px,
      #222 260px,
      #222 320px,
      transparent
    ),
    radial-gradient(circle at right, #111, rgba(51, 51, 51, 1));
  background-color: #333;
  font-family: "Permanent Marker", cursive;
  font-size: 2.2em;
  color: rgba(238, 238, 238, 0.7);
  text-align: center;
`;

const MyTitle = styled.h1`
  font-size: 1.6em;
`;

const MyLine = styled.p`
  text-align: start;
`;

const MyMainArea = styled.div`
  margin-inline: 2ch;
  padding-bottom: 1ch;
`;

const MyOption = styled.option`
  background-color: #333;
`;

const MySelect = styled.select`
  vertical-align: middle;
  padding-left: 1ch;
  margin-left: 1ch;
  background: none;
  border-radius: 10px;
  font-family: "Permanent Marker", cursive;
  font-size: 0.5em;
  color: rgba(238, 238, 238, 0.8);
  width: 25ch;
`;
const MyInput = styled.input`
  vertical-align: middle;
  padding-left: 1ch;
  background: none;
  border: none;
  font-family: "Permanent Marker", cursive;
  font-size: 0.6em;
  color: rgba(238, 238, 238, 0.8);
  line-height: 0.6em;
  outline: none;
`;

const MyBorder = styled.span`
  padding: 5px 30px;
  border: thick double rgba(238, 238, 238, 0.8);
  vertical-align: middle;
`;

export {
  Shade,
  BlackBoard,
  MyLine,
  MyTitle,
  MyMainArea,
  MyOption,
  MySelect,
  MyInput,
  MyBorder,
};
