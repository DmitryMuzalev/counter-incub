import { legacy_createStore } from "redux";

//_Types:
type SettingsStateType = {
  maxValue: number;
  startValue: number;
  counterValue: number;
  isChange: boolean;
  hasError: boolean;
};

//_Action types:
type changeMaxValueAction = ReturnType<typeof changeMaxValueAC>;
type changeStartValueAction = ReturnType<typeof changeStartValueAC>;
type setSettingsAction = ReturnType<typeof setSettingsAC>;
type incrementCounterAction = ReturnType<typeof incrementCounterValueAC>;
type resetCounterAction = ReturnType<typeof resetCounterValueAC>;

type Actions =
  | changeMaxValueAction
  | changeStartValueAction
  | setSettingsAction
  | incrementCounterAction
  | setSettingsAction
  | resetCounterAction;

//_Initial state:
const initialState: SettingsStateType = {
  maxValue: 1,
  startValue: 0,
  counterValue: 0,
  isChange: false,
  hasError: false,
};

//_Reducer:
const appReducer = (
  state: SettingsStateType = initialState,
  action: Actions
) => {
  switch (action.type) {
    case "CHANGE_MAX_VALUE": {
      const isValidated =
        action.payload.value <= state.startValue ||
        action.payload.value < 0 ||
        state.startValue < 0;
      return {
        ...state,
        maxValue: action.payload.value,
        isChange: true,
        hasError: isValidated,
      };
    }

    case "CHANGE_START_VALUE": {
      const isValidated =
        state.maxValue <= action.payload.value || action.payload.value < 0;
      return {
        ...state,
        startValue: action.payload.value,
        isChange: true,
        hasError: isValidated,
      };
    }

    case "SET_SETTINGS": {
      return { ...state, isChange: false, counterValue: state.startValue };
    }

    case "INCREMENT_COUNTER": {
      return { ...state, counterValue: state.counterValue + 1 };
    }

    case "RESET_COUNTER": {
      return { ...state, counterValue: state.startValue };
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

export const incrementCounterValueAC = () => {
  return { type: "INCREMENT_COUNTER" } as const;
};

export const resetCounterValueAC = () => {
  return { type: "RESET_COUNTER" } as const;
};

export const store = legacy_createStore(appReducer);

export type RootState = ReturnType<typeof store.getState>;
