import { legacy_createStore } from "redux";

//_Types:
type SettingsStateType = {
  maxValue: number;
  startValue: number;
  counterValue: number;
  isValidated: boolean;
  isChange: boolean;
};

type changeMaxValueAction = ReturnType<typeof changeMaxValueAC>;
type changeStartValueAction = ReturnType<typeof changeStartValueAC>;
type setSettingsAction = ReturnType<typeof setSettingsAC>;

type Actions =
  | changeMaxValueAction
  | changeStartValueAction
  | setSettingsAction;

//_Initial state:
const initialState: SettingsStateType = {
  maxValue: 1,
  startValue: 0,
  counterValue: 0,
  isValidated: true,
  isChange: false,
};

//_Reducer:
const appReducer = (
  state: SettingsStateType = initialState,
  action: Actions
) => {
  switch (action.type) {
    case "CHANGE_MAX_VALUE": {
      return { ...state, maxValue: action.payload.value, isChange: true };
    }
    case "CHANGE_START_VALUE": {
      return { ...state, startValue: action.payload.value, isChange: true };
    }
    case "SET_SETTINGS": {
      return { ...state, isChange: false };
    }

    default: {
      return { ...state };
    }
  }
};

//_Action creators:
export const changeMaxValueAC = (payload: { value: number }) => {
  return { type: "CHANGE_MAX_VALUE", payload } as const;
};

export const changeStartValueAC = (payload: { value: number }) => {
  return { type: "CHANGE_START_VALUE", payload } as const;
};

export const setSettingsAC = () => {
  return { type: "SET_SETTINGS" } as const;
};

export const store = legacy_createStore(appReducer);

export type RootState = ReturnType<typeof store.getState>;
