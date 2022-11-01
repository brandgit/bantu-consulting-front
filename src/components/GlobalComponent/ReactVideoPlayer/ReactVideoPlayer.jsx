import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'; 
const video = require('../../../assets/videosApp/videoPresentation.mp4')

export const ReactVideoPlayer = () => {
    return (
        <Video  loop>
            <source src={video} type='video/webm'/>
        </Video>
    );
};
