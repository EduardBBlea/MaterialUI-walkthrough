import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px" margin={1}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            doloribus a doloremque ipsa minus dicta ducimus tempora corrupti,
            nihil, optio enim quo qui tenetur eius, nobis eaque nemo quam
            reiciendis officia cumque magni aperiam nisi vel sit! Numquam ipsa
            optio, atque nihil voluptatum nisi, blanditiis id quis sequi
            adipisci dolor?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Share
          </Button>
          <Button size="small" variant="contained">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
