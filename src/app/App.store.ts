import Api from './Api';
import CatsStore from './features/cats/store/Cats.store';
import { computed } from 'mobx';

class AppStore {
  constructor() {}

  private api: Api = new Api();

  public cats: CatsStore = new CatsStore({
    api: this.api,
  });

  @computed
  public get isLoading(): boolean {
    return Boolean(this.cats.isFetching);
  }
}

const appStore = new AppStore();

export default appStore;