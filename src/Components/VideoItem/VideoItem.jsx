import React from 'react';

import styles from './VideoItem.module.css';

const VideoItem = ({ video, onVideoSelect })=> {
  return (
    <div onClick={() => onVideoSelect(video)} className={styles.itemCont}>
      <img src={ video.snippet.thumbnails.medium.url } alt="youtubeImg"/>
      { video.snippet.title }
    </div>
  )
}

export default VideoItem;
