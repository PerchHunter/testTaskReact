import { makeAutoObservable } from "mobx";

export default class Auth {
  auth = true;

  constructor(rootstore) {
    makeAutoObservable(this);
    this.rootstore = rootstore;
  }
}
