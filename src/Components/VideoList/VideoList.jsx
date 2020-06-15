import React from 'react';

import VideoItem from '../VideoItem/VideoItem';

import styles from './VideoList.module.css';

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map((video, id) => {
    return <VideoItem onVideoSelect={ onVideoSelect } video={video} key={id}/>
  });

  return (
    <div className={styles.videoCont}>
      {renderedList}
    </div>
  )
}

export default VideoList;
