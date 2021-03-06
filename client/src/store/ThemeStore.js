import { makeAutoObservable } from "mobx";

export default class ThemeStore {
  constructor() {
    this._theme = "light";
    makeAutoObservable(this);
  }

  setAnotherTheme(theme) {
    this._theme = theme;
  }

  get theme() {
    return this._theme;
  }
}
