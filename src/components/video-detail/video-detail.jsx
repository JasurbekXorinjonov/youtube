import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api-service";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
        setVideoDetail(data.items[0]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  // const {
  //   snippet: { title, channelId, channelTitle, description, tags, thumnails },
  //   statistics: { viewCount, likeCount, commentCount },
  // } = videoDetail;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
        </Box>
        <Box width={"25%"}>Suggested video</Box>
      </Box>
    </Box>
  );
}

export default VideoDetail;
