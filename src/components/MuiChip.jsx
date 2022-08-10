import React, { useState } from "react";
import { Chip, Stack, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chip) => {
    setChips((chips) => chips.filter(($chip) => $chip !== chip));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="success" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip Outlined"
        color="warning"
        size="small"
        variant="outlined"
        avatar={<Avatar>EB</Avatar>}
      />
      <Chip
        label="Click!"
        color="secondary"
        onClick={() => alert("Clicked Chip!")}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked Chip!")}
        onDelete={() => alert("Delete handler called")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
