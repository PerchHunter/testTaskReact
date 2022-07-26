//cross-fetch требуется при тестировании
import fetch from "cross-fetch";

import { makeAutoObservable, runInAction } from "mobx";

export default class Users {
  itemsUsers = undefined;
  page = undefined;
  limit = undefined;
  offset = undefined;

  constructor(rootstore) {
    makeAutoObservable(this);
    this.rootstore = rootstore;
  }

  async loadUsers() {
    try {
      let response = await fetch("https://test.relabs.ru/api/users/list");
      let result = await response.json();

      runInAction(() => {
        this.page = result.page;
        this.limit = result.limit;
        this.offset = result.offset;
        this.itemsUsers = result.items;
      });
    } catch (err) {
      let message = "Данные пользователей не получены: ";
      console.log(message, err);
    }
  }

  deleteUser = (userID) => {
    let newUsers = this.itemsUsers.filter((user) => user.id !== userID);
    this.itemsUsers = newUsers;
  };

  updatePage = (newPage) => {
    this.page = newPage;
  };

  updateOffset = (newOffset) => {
    this.offset = newOffset;
  };
}
