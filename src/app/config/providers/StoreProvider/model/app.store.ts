import { CounterStore } from '@/app/counter/model/store/countre.store';

import { GeneralStore } from './general';

/**
 * App Store
 */
class AppStore {
  public counterStore = new CounterStore();

  public generalStore = new GeneralStore();
}

export { AppStore };
