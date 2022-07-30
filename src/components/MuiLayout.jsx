import { Box } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <>
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
    </>
  );
};

export default MuiLayout;
