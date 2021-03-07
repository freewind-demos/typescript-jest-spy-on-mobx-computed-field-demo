import {Store} from './Store';
import {configure} from "mobx";

configure({computedConfigurable: true});

describe('Store', () => {
  it('mocks computed', () => {
    const store = new Store();
    jest.spyOn(store, 'doubleValue', 'get').mockReturnValue(100)
    expect(store.doubleDoubleValue).toBe(200);
  })
})
