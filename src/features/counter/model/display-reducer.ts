import { RootState } from "app/store";
import { setSettingsAction } from "./settings-reducer";

//_Types:
type DisplayState = {
  counterValue: number;
};

//_Initial state:
const initialCounterState: DisplayState = {
  counterValue: 0,
};

//_Reducer:
export const displayReducer = (
  state: DisplayState = initialCounterState,
  action: Actions
): DisplayState => {
  switch (action.type) {
    case "SET_SETTINGS": {
      return { ...state, counterValue: action.payload.value };
    }

    case "INCREMENT_COUNTER": {
      return { ...state, counterValue: state.counterValue + 1 };
    }

    case "RESET_COUNTER": {
      return { ...state, counterValue: action.payload.value };
    }

    default: {
      return state;
    }
  }
};

//_Action types:
type incrementCounterAction = ReturnType<typeof incrementCounterValueAC>;
type resetCounterAction = ReturnType<typeof resetCounterValueAC>;

export type Actions =
  | incrementCounterAction
  | resetCounterAction
  | setSettingsAction;

//_Action creators:

export const incrementCounterValueAC = () => {
  return { type: "INCREMENT_COUNTER" } as const;
};

export const resetCounterValueAC = (payload: { value: number }) => {
  return { type: "RESET_COUNTER", payload } as const;
};

//_Selectors:
export const getCounterValue = (state: RootState) => state.display.counterValue;
