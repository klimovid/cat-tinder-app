export interface ICatBreed {
  name: string;
  origin: string
  intelligence: number;
}

export interface ICatData {
  id: string;
  url: string;
  width: string;
  height: string;
}

export interface IEnrichedCatData extends ICatData {
  breeds: Array<ICatBreed>;
}