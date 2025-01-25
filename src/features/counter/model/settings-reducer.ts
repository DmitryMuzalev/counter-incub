import { RootState } from "app/store";

//_Types:
type SettingsState = {
  maxValue: number;
  startValue: number;
  isChange: boolean;
  hasError: boolean;
};

//_Initial state:
const initialSettingsState: SettingsState = {
  maxValue: 1,
  startValue: 0,
  isChange: false,
  hasError: false,
};

//_Validation:
const validateValues = (maxValue: number, startValue: number): boolean => {
  return maxValue <= startValue || maxValue < 0 || startValue < 0;
};

//_Reducer:
export const settingsReducer = (
  state: SettingsState = initialSettingsState,
  action: Actions
): SettingsState => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_MAX_VALUE": {
      return {
        ...state,
        maxValue: payload.value,
        isChange: true,
        hasError: validateValues(payload.value, state.startValue),
      };
    }

    case "CHANGE_START_VALUE": {
      return {
        ...state,
        startValue: payload.value,
        isChange: true,
        hasError: validateValues(state.maxValue, payload.value),
      };
    }

    case "SET_SETTINGS": {
      return { ...state, isChange: false };
    }

    default: {
      return state;
    }
  }
};

//_Action types:
export type setSettingsAction = ReturnType<typeof setSettingsAC>;
type changeMaxValueAction = ReturnType<typeof changeMaxValueAC>;
type changeStartValueAction = ReturnType<typeof changeStartValueAC>;

export type Actions =
  | changeMaxValueAction
  | changeStartValueAction
  | setSettingsAction
  | setSettingsAction;

//_Action creators:
export const changeMaxValueAC = (payload: { value: number }) => {
  return { type: "CHANGE_MAX_VALUE", payload } as const;
};

export const changeStartValueAC = (payload: { value: number }) => {
  return { type: "CHANGE_START_VALUE", payload } as const;
};

export const setSettingsAC = (payload: { value: number }) => {
  return { type: "SET_SETTINGS", payload } as const;
};

//_Selectors:
export const getSettings = (state: RootState) => state.settings;
