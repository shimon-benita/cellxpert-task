import store, { ITypes } from "./store";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

import React from "react";

const TypeSelector = styled.select`
  border: 1px solid #0a0903;
  border-radius: 1rem;
  padding: 1rem;
  width: 37ch;
  background-color: #f5f5f5;
`;

const CharInput = styled.input`
  border: 1px solid #0a0903;
  border-radius: 1rem;
  padding: 1rem;
  width: 13ch;
  background-color: #f5f5f5;
`;

const ResultContainer = styled.div`
  border: 1px solid #0a0903;
  border-radius: 1rem;
  padding: 1rem;
  display: block;
  text-align: center;
  width: 10ch;
  background-color: #f5f5f5;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const MyLabel = styled.span`
  margin: 1em;
  color: #3a5549;
  font-size: larger;
`;

const MyBody = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f7f3;
`;

const Title = styled.h1`
  text-align: center;
  display: block;
  color: #426152;
`;

const MyFooter = styled.div`
  text-align: center;
  margin-top: 10rem;
  padding-bottom: 1rem
`;


const types = [
  "Words that starts with",
  "Words that ends with",
  "Appearances in the dictionary of",
  "Words that have duplication of",
  "Words with at least 3 appearances of",
];

const App = observer(() => {
  return (
    <MyBody>
      <Title>Query The Dictionary!</Title>

      <MainContainer>
        <SecondaryContainer>
          <MyLabel>I'm looking for</MyLabel>
          <TypeSelector
            value={store.selectedType}
            onChange={(e) => {
              store.setType(e.target.value as ITypes);
            }}
          >
            <option value="">Please choose</option>

            {types.map((type) => {
              return <option key={type} value={type}>{type}</option>;
            })}
          </TypeSelector>
        </SecondaryContainer>

        <SecondaryContainer>
          <MyLabel>The letter</MyLabel>
          <CharInput
            placeholder="Enter one letter"
            value={store.selectedChar}
            maxLength={1}
            onChange={(e) => {
              store.setChar(e.target.value);
            }}
          />
        </SecondaryContainer>

        <SecondaryContainer>
          <MyLabel>Result</MyLabel>
          {<ResultContainer>{store.getResult()}</ResultContainer>}
        </SecondaryContainer>
      </MainContainer>
      <MyFooter>&copy; Shimon Ben Ita</MyFooter>
    </MyBody>
  );
});

export default App;
