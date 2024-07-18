import { useEffect, useRef } from "react"
import styles from "./Button.module.css"
import { Player } from "@lordicon/react"
const Button=(props)=>{
    const playerRef1=useRef(null)
    useEffect(()=>{

   
    playerRef1?.current?.playFromBeginning()
},[])
const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2000); // play again after 2.5 seconds
  };

  
const handleClick=()=>{
  if(props.href){

    window.open(props.href);
    return ;
    
        }
        const phoneNumber = "+972507896962";
        // Set the message content
        const message =props.message || "היי שיר, אשמח לשמוע על..";
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        // Construct the WhatsApp message URL with phone number and message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        // Open the URL in a new tab
        window.open(whatsappURL, "_blank");
    
      };

return <>

<div className={styles.wrap} onClick={handleClick}>
<div className={styles.icon}><Player icon={props.icon} size="100%" onComplete={handleComplete} ref={playerRef1}/></div>
<div className={styles.text}>{props.text}</div>
</div>
</>
}
export default Button