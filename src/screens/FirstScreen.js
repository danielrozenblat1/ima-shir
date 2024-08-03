import styles from "./FirstScreen.module.css"
import shir from "../images/אמא שיר.png"

const FirstScreen=(props)=>{
   

return <>

<div className={props.scrolled? styles.descriptionP:styles.description}>הכירו את מי שגרמה לאלפי הורים <div className={styles.underline}>להפסיק לסבול</div> משגרת היום יום עם הילדים שלהם ולהתחיל להנות מגידול הילדים</div>
<h1 className={styles.title}>אמא שיר</h1>
<div className={styles.center}><img className={styles.image} src={shir} alt="אמא שיר"/></div>
<h2 className={styles.job}>מדריכת הורים • גמילה מחיתולים • קשיי גמילה • מומחית להתפתחות הילד בגיל הרך</h2>

</>


}
export default FirstScreen