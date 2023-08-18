import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import { colors } from "../../constans/colors";
import SearchBar from "../search-bar/search-bar";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{ position: "sticky", top: 0, zIndex: 999, background: colors.primary }}>
      <Link to="/">
        <img src={logo} alt="logo" height={40} width={60} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
