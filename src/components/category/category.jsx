import { Stack } from "@mui/material";

import { colors } from "../../constans/colors";

import categorys from "./category-icon";

function Category({ selectedCategoryHandler, selectedCategory }) {
  return (
    <Stack direction={"row"} style={{ overflowX: "scroll" }}>
      {categorys.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: 0,
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && "#ffff",
          }}
          onClick={() => selectedCategoryHandler(item.name)}>
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.secondary,
              marginRight: "15px",
            }}>
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
