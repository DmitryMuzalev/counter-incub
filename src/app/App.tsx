import { Counter } from "../components/Counter/Counter";
import { Settings } from "../components/Settings/Settings";

function AppWithRedux() {
  return (
    <div className="app">
      <Settings />
      <Counter />
    </div>
  );
}

export default AppWithRedux;
