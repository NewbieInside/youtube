import React from 'react';

import styles from './VideoDetail.module.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${ video.id.videoId }`

  return (
    <div className={styles.videoLoader}>
      <div className={styles.videoWatch}>
        <iframe title='video player' src={ videoSrc } width='650px' height='450px'></iframe>
      </div>
      <div className={styles.videoDetail}>
        <h4>Title: { video.snippet.title }</h4>
        <p> Description: { video.snippet.description }</p>
      </div>
    </div>
  );
};

export default VideoDetail;
