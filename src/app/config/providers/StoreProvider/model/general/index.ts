import { makeAutoObservable } from 'mobx';

/**
 * General Store
 */
class GeneralStore {
  public constructor() {
    makeAutoObservable(this);
  }

  //public global: AppStore;

  public loading: boolean = false;

  public showLoader = () => {
    this.loading = true;
  };

  public hideLoader = () => {
    this.loading = false;
  };
}

export { GeneralStore };
