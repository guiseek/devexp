import { StorageFactory } from './storage.factory';
import { StorageImpl } from './storage.impl';
import { Storage } from './storage';

export class StorageFactoryImpl<T> implements StorageFactory<T> {
  private storage: Storage<any>;

  getStorage<T>(): Storage<T> {
    if (this.storage == null) {
      this.storage = new StorageImpl();
    }
    return this.storage;
  }
}
