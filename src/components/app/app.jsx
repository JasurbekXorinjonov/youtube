import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Navbar, Search, Main, Channel, VideoDetail } from "../index";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Channel" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
