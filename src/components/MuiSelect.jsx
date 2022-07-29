import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  const handleChange = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="RO">Romania</MenuItem>
        <MenuItem value="GB">Great Britain</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
