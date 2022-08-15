import { makeAutoObservable } from "mobx";
import dict from "./dict";

export enum ITypes {
  DEFAULT = "",
  WORDS_THAT_STARTS_WITH = "Words that starts with",
  WORDS_THAT_ENDS_WITH = "Words that ends with",
  APPEARANCES_IN_THE_DICTIONARY_OF = "Appearances in the dictionary of",
  WORDS_THAT_HAVE_DUPLICATION_OF = "Words that have duplication of",
  WORDS_WITH_AT_LEAST_THREE_APPEARANCES = "Words with at least 3 appearances of",
}

class Store {
  dict = dict;
  selectedType: ITypes = ITypes.DEFAULT;
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

  findWordWithThreeAppearances(word: string): boolean {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (this.selectedChar === char) {
        count++;

        if (count > 2) {
          return true;
        }
      }
    }
    return false;
  }

  getResult() {
    let result = 0;
    if (!this.selectedChar) {
      return result;
    }

    switch (this.selectedType) {
      case ITypes.WORDS_THAT_STARTS_WITH:
        this.dict.forEach((word) => {
          if (word.startsWith(this.selectedChar)) {
            result++;
          }
        });

        break;

      case ITypes.WORDS_THAT_ENDS_WITH:
        this.dict.forEach((word) => {
          if (word.endsWith(this.selectedChar)) {
            result++;
          }
        });

        break;

      case ITypes.APPEARANCES_IN_THE_DICTIONARY_OF:
        this.dict.forEach((word) => {
          const split = word.split("");

          split.forEach((char) => {
            if (char === this.selectedChar) {
              result++;
            }
          });
        });

        break;

      case ITypes.WORDS_THAT_HAVE_DUPLICATION_OF:
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

      case ITypes.WORDS_WITH_AT_LEAST_THREE_APPEARANCES:
        this.dict.forEach(
          (word) => this.findWordWithThreeAppearances(word) && result++
        );
        break;
    }

    return result;
  }
}

const store = new Store();

export default store;
