import { useContext } from "react";

import StoreContext from "../contexts/store";

export default function (...list) {
  let store = useContext(StoreContext);
  return list.map((name) => store[name]);
}
