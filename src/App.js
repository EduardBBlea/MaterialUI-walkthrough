import "./App.css";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
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
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiLink from "./components/MuiLink";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeeddial from "./components/MuiSpeeddial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiChip from "./components/MuiChip";
import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiPicker } from "./components/MuiPicker";
import MuiDateRangePicker from "./components/MuiDateRangePicker";
import MuiResponsiveness from "./components/MuiResponsiveness";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          <MuiAccordion />
          <MuiImageList />
          <MuiNavbar />
          <MuiLink />
          <MuiBreadcrumbs />
          <MuiDrawer />
          <MuiSpeeddial />
          <MuiBottomNavigation />
          <MuiAvatar />
          <MuiBadge />
          <MuiList />
          <MuiChip />
          <MuiTooltip />
          <MuiTable />
          <MuiAlert />
          <MuiSnackbar />
          <MuiDialog />
          <MuiProgress />
          <MuiSkeleton />
          <MuiLoadingButton />
          <MuiPicker />
          <MuiDateRangePicker />
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
