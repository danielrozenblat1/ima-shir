import React, { useRef,useEffect } from 'react';
import styles from './TimeLine.module.css';
import { Player } from '@lordicon/react'; 
import ScrollReveal from "scrollreveal"
const TimelineItem = ({ icon, title, description }) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };
  useEffect(()=>{
    playerRef1?.current?.playFromBeginning();
    ScrollReveal().reveal(`.${styles.timelineIcon}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });

  },[])
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>
        <div className={styles.icon}>
          <Player 
            icon={icon} 
            ref={playerRef1} 
            size="100%" 
            loop={true} 
            onComplete={handleComplete}
          />
        </div>
      </div>
      <div className={styles.timelineContent}>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <p className={styles.timelineDescription}>{description}</p>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;