import React from 'react';
import PropTypes from 'prop-types';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants'; // أو المسار المناسب

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  const subs = channelDetail?.statistics?.subscriberCount;

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircleIcon sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {subs && (
            <Typography sx={{ fontSize: 15, fontWeight: 500, color: 'gray' }}>
              {parseInt(subs).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

ChannelCard.propTypes = {
  channelDetail: PropTypes.object.isRequired,
  marginTop: PropTypes.string,
};

export default ChannelCard;
