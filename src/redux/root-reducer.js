import { combineReducers } from "redux";

import itemReducer from "./items/items.reducer";
import uiReducer from "./ui/ui.reducer";

const rootReducer = combineReducers({
  application: itemReducer,
  ui: uiReducer,
});

export default rootReducer;
