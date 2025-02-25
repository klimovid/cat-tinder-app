import { ICatData, IEnrichedCatData } from './CatsData';

export default class CatModel {
  constructor(
    private readonly deps: {
      data: IEnrichedCatData;
    },
  ) {}

  public get id(): string {
    return this.deps.data.id;
  }

  public get origin(): string {
    return (this.deps.data.breeds[0] || {}).origin;
  }

  public get name(): string {
    return this.deps.data.breeds[0].name;
  }

  public get intelligenceLevel(): number {
    return this.deps.data.breeds[0].intelligence;
  }

  public get imageUrl(): string {
    return this.deps.data.url
  }
}