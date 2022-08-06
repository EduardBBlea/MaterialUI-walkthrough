import "./App.css";

import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import Muicheckbox from "./components/Muicheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <Muicheckbox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <MuiLayout />
      <MuiCard />
    </div>
  );
}

export default App;
