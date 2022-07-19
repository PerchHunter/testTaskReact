import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import StoreContext from "./contexts/store";
import Rootstore from "./Store/rootstore";

const store = new Rootstore();

store.users
  .loadUsers()
  .then(() => {
    store.events.loadEvents();
  })
  .then(() => {
    const root = createRoot(document.querySelector(".app"));
    root.render(
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    );
  });
