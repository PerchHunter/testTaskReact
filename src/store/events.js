import { makeAutoObservable, runInAction } from "mobx";

export default class Events {
  eventsList = [];

  constructor(rootstore) {
    makeAutoObservable(this);
    this.rootstore = rootstore;
  }

  loadEvents = () => {
    const socket = new WebSocket("wss://test.relabs.ru/event");

    socket.onmessage = (event) => {
      let newEventsList = [JSON.parse(event.data), ...this.eventsList];

      runInAction(() => {
        this.eventsList = newEventsList;
      });
    };
  };
}
