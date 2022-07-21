import { makeAutoObservable } from "mobx";

export default class Auth {
  auth = false;

  constructor(rootstore) {
    makeAutoObservable(this);
    this.rootstore = rootstore;
  }

  setAuth = (newBoolVal) => {
    this.auth = newBoolVal;
  };
}
