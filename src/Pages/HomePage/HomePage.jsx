import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "../../Components/Feed/Feed";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage = ({mode,setMode}) => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default HomePage;
