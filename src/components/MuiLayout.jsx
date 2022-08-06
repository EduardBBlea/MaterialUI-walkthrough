import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper
      sx={{
        padding: "32px",
      }}
      elevation={4}
    >
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
      <Grid container my={4} spacing={2}>
        <Grid item xs={6} md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box bgcolor="success.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6} md={12}>
          <Box bgcolor="error.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
