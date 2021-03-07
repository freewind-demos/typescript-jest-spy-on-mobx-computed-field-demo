import {observable, computed} from 'mobx';

export class Store {
  @observable value: number = 1

  @computed get doubleValue(): number {
    return this.value * 2;
  }

  @computed get doubleDoubleValue(): number {
    return this.doubleValue * 2;
  }
}
