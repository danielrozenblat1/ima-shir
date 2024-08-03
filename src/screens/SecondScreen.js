import styles from "./SecondScreen.module.css"
import cry from "../Icons/wired-outline-266-emoji-cry.json"
import mall from "../Icons/wired-outline-1937-shopping-mall.json"
import no from "../Icons/wired-outline-2465-restriction.json"
import sleep from "../Icons/wired-outline-668-sleeping-in-bed-sleepy.json"
import cloth from "../Icons/wired-outline-1526-onesies-baby-clothes.json"
import IconBox from "../components/box/Box"
import {useEffect} from "react"
import ScrollReveal from "scrollreveal"
const SecondScreen=()=>{


    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
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
    return <>
    <div className={styles.title}>כמה פעמים מצאת את עצמך..?</div>
    <div className={styles.row}>
    <IconBox  right={true} icon={cloth} title="נאבקת עם הילד בכל פעולה פשוטה- להתלבש, להתקלח, לצחצח שיניים, לסדר את המשחקים"/>
    <IconBox icon={mall} title="מרימה בתסכול את הילד שמשתטח על הרצפה במקומות ציבוריים"/>
    <IconBox right={true} icon={no} title="חושבת פעמיים לפני שאת אומרת לא לילדים שלך"/>
    <IconBox icon={cry} title="נכנסת עם הילד ללופ של עונשים בידיעה שזו לא הדרך הנכונה"/>
    <IconBox  right={true} icon={sleep} title="מחכה לרגע שהילדים ילכו לישון בשביל כמה רגעים של שקט"/>
    </div>
    <div className={styles.title}>את לא אשמה! ואת גם לא לבד!</div>
    <div className={styles.description}>כשהפכת להיות אמא, לא חילקו לך בחדר לידה ספר על הורות. <br/>
כל מה שאת מביאה להורות שלך זה למעשה את האדם שאת. <br/>
את כל מה שאת מכירה, אירועים וחוויות שחווית בילדות,
האמונות שלך, דפוסי ההתנהגות שלך, החינוך שאת קיבלת-
כל מה שחווית בחייך ועיצב אותך למי שאת היום.</div>
<div className={styles.title}>וחשוב שתביני!</div>
<div className={styles.description}>הבעיה לרוב מסתתרת בנו! <div className={styles.bold}>ולא בילד</div> אנחנו רק צריכות <div className={styles.bold}>להבין איפה הבעיה!</div></div>
<div className={styles.title}>שיר, מה תהליך העבודה איתך?</div>
<div className={styles.description}>זה קורה בכמה שלבים פשוטים.. </div>
    </>
}
export default SecondScreen