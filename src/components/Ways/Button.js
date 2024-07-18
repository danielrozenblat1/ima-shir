import styles from "./Button.module.css"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"

const Button = (props) => {
  const playerRef1 = useRef(null)

  useEffect(() => {
    playerRef1?.current?.playFromBeginning()
  }, [])

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2000);
  };

  const handleClick = () => {
    if (props.href) {
      window.open(props.href);
      return;
    }

    const phoneNumber = "+972505561677";
    const message = props.message || "היי שיר, אשמח לשמוע על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.buttonWrap} onClick={handleClick}>
      <div className={styles.textContainer}>
        <div className={styles.text}>{props.text}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={styles.icon}>
        <Player icon={props.icon} size="90%" onComplete={handleComplete} ref={playerRef1} />
      </div>
    </div>
  )
}

export default Button