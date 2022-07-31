import { makeAutoObservable } from "mobx";
import dict from "./dict";

export type ITypes =
  | ""
  | "Words that starts with"
  | "Words that ends with"
  | "Appearances in the dictionary of"
  | "Words that have duplication of"
  | "Words with at least 3 appearances of";

class Store {
  dict = dict;
  selectedType: ITypes = "";
  selectedChar: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setType = (type: ITypes) => {
    this.selectedType = type;
  };

  setChar = (char: string) => {
    this.selectedChar = char;
  };

  getResult() {
    let result = 0;
    if (!this.selectedChar) {
      return result;
    }
    console.time("a");
    switch (this.selectedType) {
      case "Words that starts with":
        this.dict.forEach((word) => {
          if (word.startsWith(this.selectedChar)) {
            result++;
          }
        });

        break;

      case "Words that ends with":
        this.dict.forEach((word) => {
          if (word.endsWith(this.selectedChar)) {
            result++;
          }
        });

        break;

      case "Appearances in the dictionary of":
        this.dict.forEach((word) => {
          const split = word.split("");

          split.forEach((char) => {
            if (char === this.selectedChar) {
              result++;
            }
          });
        });

        break;

      case "Words that have duplication of":
        this.dict.forEach((word) => {
          const split = word.split("");

          for (let i = 0; i < split.length; i++) {
            const prevChar = split[i - 1];
            const char = split[i];

            if (prevChar && prevChar === char && this.selectedChar === char) {
              result++;
              break;
            }
          }
        });

        break;

      case "Words with at least 3 appearances of":
        this.dict.forEach((word) => {
          let count = 0;

          const split = word.split("");
          for (let i = 0; i < split.length; i++) {
            const char = split[i];
            if (this.selectedChar === char) {
              count++;

              if (count > 2) {
                result++;
                break;
              }
            }
          }
        });

        break;
    }

    console.timeEnd("a");
    return result;
  }
}

const store = new Store();

export default store;
