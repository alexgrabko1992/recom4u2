import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._userId = null;
    makeAutoObservable(this);
  }

  setUserId(id) {
    this._userId = id;
  }

  get userId() {
    return this._userId;
  }
}
