import { combineReducers, legacy_createStore } from "redux";
import { settingsReducer } from "features/counter/model/settings-reducer";
import { displayReducer } from "features/counter/model/display-reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  display: displayReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
