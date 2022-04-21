import { StorageImpl } from './storage.impl';
import { Storage } from './storage';
import * as path from 'path';
import * as fs from 'fs';

describe('Storage', () => {
  const storagePath = './test';
  let storage: Storage<any>;

  beforeAll(async () => {
    storage = new StorageImpl();
    await storage.init('entity', storagePath);
  });

  it('should create the storage directory if it does not exist', () => {
    expect(fs.statSync(storagePath).isDirectory()).toBeTruthy();
  });

  it('should CRUD an entity', async () => {
    const entity1 = await storage.create({ a: 'b' });
    expect(entity1.id).toEqual(0);

    expect(await storage.getAll()).toHaveLength(1);

    const entity2 = await storage.create({ c: 'd' });
    expect(entity2.id).toEqual(1);

    let allEntities = await storage.getAll();
    expect(allEntities.find((e) => e.a === 'b')).not.toBeUndefined();
    expect(allEntities.find((e) => e.c === 'd')).not.toBeUndefined();

    await storage.delete(entity2);
    allEntities = await storage.getAll();
    expect(allEntities).toHaveLength(1);
    expect(allEntities.find((e) => e.a === 'b')).not.toBeUndefined;
    expect(allEntities.find((e) => e.c === 'd')).toBeUndefined;

    await storage.update({ id: entity1.id, e: 'f' });
    expect((await storage.get(entity1.id)).e).toEqual('f');

    await storage.delete(entity1);
    expect(await storage.getAll()).toHaveLength(0);
  });

  it('should throw an error when trying to update an entity without an ID', async () => {
    let error;
    try {
      await storage.update({});
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
  });

  it('should throw an error when trying to delete an entity without an ID', async () => {
    let error;
    try {
      await storage.delete({});
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
  });

  it('should throw an error when trying to delete an entity that does not exist', async () => {
    let error;
    try {
      await storage.delete({ id: 12345 });
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
  });

  afterAll(() => {
    fs.unlinkSync(path.join(storagePath, 'entity.json'));
    fs.rmdirSync(storagePath);
  });
});
