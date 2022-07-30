import "./App.css";

import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import Muicheckbox from "./components/Muicheckbox";
import MuiSwitch from "./components/MuiSwitch";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <Muicheckbox />
      <MuiSwitch />
    </div>
  );
}

export default App;
