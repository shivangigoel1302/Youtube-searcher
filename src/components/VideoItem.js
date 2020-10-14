import './VideoItem.css';
import React from 'react';

const VideoItem = ({video,onVideoSelect}) => {
return(
   <div onClick={()=>onVideoSelect(video)} className="video-item item" >
    <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="youtube thumbnail"/>
    <div className="content">
        <div className="heading">
       {video.snippet.title}
       </div>
    </div>
    </div>
);
}
export default VideoItem