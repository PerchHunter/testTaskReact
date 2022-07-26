//Возникала ошибка ReferenceError: fetch is not defined
//решение - чтобы fecth был виден, добавил эту библиотеку
import fetch from "cross-fetch";

import Users from "../users";

let users = new Users();

describe("testing users store", () => {
  test("test API", () => {
    fetch("https://test.relabs.ru/api/users/list")
      .then((response) => {
        expect(response.status).toBe(200);

        return response.status !== 200 ? Promise.reject : response.json();
      })
      .then((data) => {
        expect(data.page).toBe(1);
        expect(data.limit).toBeGreaterThan(0);
        expect(data.offset).toBe(0);
        expect(data.items.length).toBeGreaterThanOrEqual(0);
      });
  });

  test("test loadUsers method", async () => {
    expect(users.page).toBeUndefined();
    expect(users.limit).toBeUndefined();
    expect(users.offset).toBeUndefined();
    expect(users.itemsUsers).toBeUndefined();

    await users.loadUsers();

    expect(users.page).toBe(1);
    expect(users.limit).toBeGreaterThan(0);
    expect(users.offset).toBe(0);
    expect(users.itemsUsers.length).toBeGreaterThanOrEqual(0);
  });

  test("test deleteUser method", async () => {
    let quantity = users.itemsUsers.length;
    // console.log(quantity);

    if (quantity) {
      let rand = Math.random(0, quantity - 1);
      users.deleteUser(users.itemsUsers[rand].id);

      expect(users.itemsUsers.length).toBe(quantity - 1);
    }
  });
});
