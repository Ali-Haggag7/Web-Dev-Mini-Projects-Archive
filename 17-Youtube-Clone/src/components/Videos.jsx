import { Stack, Box } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({ videos, direction }) => {

    if (!videos?.length) {
        return "loading..."
    }

    return (
        <Stack direction={direction || "row"} display="flex" flexWrap="wrap" sx={{ justifyContent: { xs: 'center', sm: 'start' } }}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos