import { observable, runInAction, action, makeAutoObservable } from 'mobx';

import Api from '../../../Api';
import CatsApi from './Cats.api';
import CatModel from './CatModel';
import { IEnrichedCatData } from './CatsData';


export default class CatsStore {
  constructor(
    private readonly deps: {
      api: Api;
    },
  ) {
    makeAutoObservable(this);

    this.init();
  }

  catsApi = new CatsApi(this.deps);

  isRefreshing: boolean = false;

  isFetching: boolean = false;

  isFetchingFailed: boolean = false;

  catsList = observable.array<CatModel>([]);

  private async init() {
    this.fetchCats();
  }

  @action.bound
  public fetchCats = async () => {
    runInAction(() => {
      this.isFetching = true;
    });

    try {
      const newCats = await this.catsApi.fetchList();

      const results = await Promise.all(newCats.map(async (cat) => {
        const catRawData = await this.catsApi.getById(cat.id);

        return new CatModel({
          data: catRawData,
        });
      }));

      runInAction(() => {
        this.catsList.replace(results);
        this.isFetchingFailed = false;
      });
    } catch (error: any) {
      runInAction(() => {
        this.isFetchingFailed = true;
      });

      throw new Error(error.message);
    } finally {
      runInAction(() => {
        this.isFetching = false;
      });
    }
  };

  @action.bound
  public vote = async (id: IEnrichedCatData['id']) => {
    this.catsApi.voteUp(id)
  }
}