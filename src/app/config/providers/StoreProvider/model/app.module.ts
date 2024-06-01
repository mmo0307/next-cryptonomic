// import { AppStore } from './app.store';
//
// /**
//  * IStore
//  */
// interface IStore<S> {
//   global: AppStore;
//
//   hydrate(store: S, global: AppStore): void;
// }
//
// /**
//  * Store Constructor
//  */
// type StoreConstructor = new (
//   ...args: any[]
// ) => any & { [IS_STORE_TYPE]?: boolean };
//
// /**
//  * IS_STORE_TYPE
//  */
// const IS_STORE_TYPE = 'IS_STORE_TYPE';
//
// /**
//  * Store decorator
//  */
// const Store = (constructor: StoreConstructor) => {
//   (constructor as any)[IS_STORE_TYPE] = true;
// };
//
// /**
//  * Base Hydrate
//  */
// const baseHydrate = <
//   S extends Record<string, any>,
//   T extends Record<string, any>
// >(
//   source: S,
//   target: T | (T & IStore<T>)
// ) => {
//   Object.entries(source).forEach(([prop, val]) => {
//     (target as Record<string, any>)[prop] = val;
//   });
// };
//
// let store: AppStore | null = null;
//
// function deepHydrate<
//   T extends Record<string, any>,
//   S extends Record<string, any>
// >(target: T | (T & IStore<T>), source: S, global: AppStore) {
//   Object.entries(target)
//     .filter(([_, store]) => store?.constructor[IS_STORE_TYPE])
//     .forEach(([key, store]: [string, T | (T & IStore<T>)]) => {
//       const _source = (source as any)[key];
//
//       if ((store as T & IStore<T>).hydrate) {
//         (store as T & IStore<T>).hydrate(_source, global);
//       } else {
//         baseHydrate<typeof _source, typeof store>(_source, store);
//       }
//
//       (store as T & IStore<T>).global = global;
//
//       deepHydrate<typeof store, typeof _source>(store, _source, global);
//     });
// }
//
// const initializeStore = (hydrationData: AppStore | null = null) => {
//   const _store = store ?? new AppStore();
//
//   // If your page has Next.js data fetching methods that use a Mobx store, it will
//   // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
//   if (hydrationData) {
//     deepHydrate(_store, hydrationData, _store);
//   }
//
//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store;
//
//   // Create the store once in the client
//   if (!store) store = _store;
//
//   return _store;
// };
//
// export { initializeStore, Store };
