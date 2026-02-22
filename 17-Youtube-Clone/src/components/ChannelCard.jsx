import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from './utils/constants'

const ChannelCard = ({ channelDetail,marginTop }) => (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', sm: '365px', md: "315px" },
        height: '326px',
        margin: 'auto',
        marginTop:marginTop,
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #fff' }}
                />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: "14px", color: 'gray', ml: '5px' }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)


export default ChannelCard