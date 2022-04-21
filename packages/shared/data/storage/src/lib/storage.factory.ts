import { StorageImpl } from './storage.impl';
import { Storage } from './storage';

/**
 * A factory that creates a singleton {@link Storage} object.
 */
export class StorageFactory<T extends { id: number }> {
  private storage: Storage<T>;

  setStorage(storage: Storage<T>) {
    this.storage = storage;
  }

  getStorage(): Storage<T> {
    if (!this.storage) {
      this.storage = new StorageImpl<T>();
    }
    return this.storage;
  }
}
