import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ width: { xs: '100%', sm: '350px', md: "300px", }, boxShadow: "none", borderRadius: 0, marginLeft: '15px', marginBottom: '15px', margin: { xs: '0 auto 15px', sm: '0 auto 15px 15px', md: '0 15px 15px 0' } }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: "12px", color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard