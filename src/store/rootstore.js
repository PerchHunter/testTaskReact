import Auth from "./auth";
import Users from "./users";
import Events from "./events";

export default class Rootstore {
  constructor() {
    this.auth = new Auth(this);
    this.users = new Users(this);
    this.events = new Events(this);
  }
}
