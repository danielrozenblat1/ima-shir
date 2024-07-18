import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './Box.module.css';
import ScrollReveal from "scrollreveal"
const IconBox = (props) => {

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.iconBox}`, {
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
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    
      useEffect(() => {
        playerRef1?.current?.playFromBeginning();
      }, []);
  return (
    <div className={styles.iconBox}>
      <div className={styles.icon}>
      <Player icon={props.icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
      </div>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
};

export default IconBox;