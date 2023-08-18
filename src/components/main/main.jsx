import { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constans/colors";
import Category from "../category/category";
import Videos from "../videos/videos";
import { ApiService } from "../../service/api-service";

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = (Category) => setSelectedCategory(Category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q= New`);
        setVideos(data.items);
      } catch (error) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
