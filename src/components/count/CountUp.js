import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./CountUp.module.css";

const CountingUp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.row}>
 

      <div className={styles.font}>
        {inView && <CountUp end={200} duration={4.5} />}
        <div className={styles.explain}>אמהות שעברו ליווי אישי</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={50} duration={3} />}
        <div className={styles.explain}>אמהות שעברו ליווי קבוצתי</div>
      </div>
    </div>
  );
};

export default CountingUp;