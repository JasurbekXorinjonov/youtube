import { IconButton, Paper } from "@mui/material";
import { colors } from "../../constans/colors";
import { Search } from "@mui/icons-material";

function SearchBar() {
  return (
    <Paper
      component={"form"}
      sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: "none" }}>
      <input type="text" placeholder="Search..." className="search-bar" />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
