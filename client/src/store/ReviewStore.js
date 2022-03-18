import { makeAutoObservable } from "mobx";

export default class ThemeStore {
  constructor() {
    this._reviews = [];
    makeAutoObservable(this);
  }

  setReviews(reviews) {
    this._reviews = reviews;
  }

  get reviews() {
    return this._reviews;
  }
}
