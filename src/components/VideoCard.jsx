import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card 
    sx={{ 
      width: { xs: '100%', sm: '358px', md: "320px" }, 
      boxShadow: "none", 
      borderRadius: 2, 
      '&:hover': { boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' },
      transition: 'all 0.3s ease' 
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} aria-label="Go to video">
      <CardMedia 
        component="img" 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title || demoVideoTitle} 
        sx={{ 
          width: '100%', 
          height: 180, 
          objectFit: 'cover'
        }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} aria-label="Go to video">
        <Typography 
          variant="subtitle1" 
          fontWeight="bold" 
          color="#FFF" 
          noWrap 
          sx={{ textOverflow: 'ellipsis' }} 
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} aria-label="Go to channel">
        <Typography variant="subtitle2" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
