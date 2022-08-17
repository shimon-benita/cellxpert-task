import store, { ITypes } from "./store";
import {
  Shade,
  BlackBoard,
  MyTitle,
  MyMainArea,
  MyLine,
  MySelect,
  MyOption,
  MyInput,
  MyBorder,
} from "./emotion";
import { observer } from "mobx-react-lite";

const types = [
  "Words that starts with",
  "Words that ends with",
  "Appearances in the dictionary of",
  "Words that have duplication of",
  "Words with at least 3 appearances of",
];

const App = observer(() => {
  return (
    <Shade>
      <BlackBoard>
        <MyTitle>Query The Dictionary!</MyTitle>
        <MyMainArea>
          <MyLine>
            I'm looking for :
            <MySelect
              value={store.selectedType}
              onChange={(e) => {
                store.setType(e.target.value as ITypes);
              }}
            >
              <MyOption value="">Please choose</MyOption>

              {types.map((type) => {
                return (
                  <MyOption key={type} value={type}>
                    {type}
                  </MyOption>
                );
              })}
            </MySelect>
          </MyLine>
          <MyLine>
            The letter :
            <MyInput
              value={store.selectedChar}
              maxLength={1}
              placeholder="Enter your letter here"
              type="text"
              onChange={(e) => {
                store.setChar(e.target.value.replace(/[^a-zA-Z\s]/, ""));
              }}
            />
          </MyLine>
          {
            <MyLine>
              Result : <MyBorder>{store.getResult()}</MyBorder>
            </MyLine>
          }
        </MyMainArea>
      </BlackBoard>
    </Shade>
  );
});

export default App;
