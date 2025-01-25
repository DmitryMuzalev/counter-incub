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

//_Reducer:
export const settingsReducer = (
  state: SettingsState = initialSettingsState,
  action: Actions
): SettingsState => {
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
