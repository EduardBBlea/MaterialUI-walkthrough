import { Box, Stack, Divider } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Stack
      sx={{
        border: "1px solid",
      }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "1rem",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Material UI
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  );
};

export default MuiLayout;
