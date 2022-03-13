import { makeAutoObservable } from "mobx";

export default class TypeStore {
  constructor() {
    this._types = [];
    this._typeId = null;
    makeAutoObservable(this);
  }

  setTypeName(name) {
    this._types = name;
  }

  get types() {
    return this._types;
  }
  setTypeId(id) {
    this._typeId = id;
  }

  get typeId() {
    return this._typeId;
  }
}
