import React from 'react';
import styles from './Who.module.css';
import certificateOne from "../../images/שיר בונגארדו תעודה.png"
import certificateTwo from "../../images/שיר בונגארדו תעודה 2.png"
import certificateThree from "../../images/שיר בונגארדו תעודה 3.png"
import shir from "../../images/שיר בונגוארדו פאולה וליאון.png"
import show from "../../images/אמא שיר הרצאות.png"
import interview from "../../images/שיר בונגוארדו פאולה וליאון 2.png"
import CountingUp from '../count/CountUp';
import Button from '../button/Button';
import {useEffect} from "react"
import ScrollReveal from "scrollreveal"
import mom from "../../Icons/wired-outline-1510-reading-babies.json"
import Recommends from '../recommends/Recommends';
const AboutMe = () => {

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.certificateContainer}`, {
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
    <>
    <div className={styles.container}>
      <div className={styles.title}>אז מי אני?</div>
      
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
     
          <img src={shir} alt="שיר בונגוארדו" className={styles.profileImage} />
        </div>
        <div className={styles.profileContent}>
        <strong><p>אני שיר בונגוארדו, או בשמי המקצועי "אמא שיר"</p></strong>
          <strong><p>מדריכת הורים ומטפלת רגשית לילדים ונוער (0-18) בשיטת NLP, מרצה לצוותי חינוך.</p></strong>
          <strong> <p>ובעלת תואר ראשון בחינוך והתפתחות הילד בגיל הרך (0-6)</p></strong>
          <strong> <p>אבל לפני הכל, אני אמא של עידו ותבל ,דרכם, גיליתי את הייעוד שלי בעולם הזה-

לעזור להורים לגדל את הילדים שלהם בצורה הטובה ביותר!</p></strong>
    
          <strong> <p>עזרתי לאלפי אמהות להכיר את תהליכי ההתפתחות של ילדיהן וליצור חוויה הורית מהנה ומשמעותית יותר דרך הליווים וההדרכות שלי. </p></strong>
          <strong> <p>כי אני מאמינה שהסוד הוא שילוב בין הידע לרגש!

בייעוצים והליווים שלי אני רואה את המשפחה כמכלול, אך עם זאת כל נפש כפרט.</p></strong>
<strong><p>אני מדריכה את ההורים תוך הסתכלות נרחבת על המשפחה וכולה ועל כל ילד כאינדיוידואל

ומתייחסת לכל תחומי ההתפתחות ! (רגשי, חברתי, מוטורי, קוגניטיבי ושפתי).</p></strong>
        </div>
      </div>


     

    </div>
    <div className={styles.credentials}>
    <h2 className={styles.head}>אני בעלת תעודת הסמכה לטיפול רגשי ב-NLP לילדים</h2>
        <div className={styles.certificateContainer}>
          <img src={certificateOne} alt="תעודת מומחית להתפתחות הילד" className={styles.certificateImage} />
        </div>

        <h2 className={styles.head}>אני בעלת תעודת הסמכה לטיפול רגשי ב-NLP להורים</h2>
        <div className={styles.certificateContainer}>    
          <img src={certificateTwo} alt="תעודת מומחית לטיפול רגשי לילדים" className={styles.certificateImage} />
        </div>

        <h2 className={styles.head}>אני בעלת תעודת הסמכה לטיפול רגשי ב NLP לנוער</h2>
        <div className={styles.certificateContainer}>
          <img src={certificateThree} alt="תעודת מומחית לטיפול רגשי לנוער" className={styles.certificateImage} />
        </div>
      </div>
  


      <div className={styles.interview}>
        <h2 className={styles.head} >הוזמנתי לראיון אצל פאולה ולאון</h2>
        <div className={styles.interviewImageContainer}>
       
          <img src={interview} alt="ראיון עם פאולה ולאון" className={styles.interviewImage} />
        </div>
      </div>
      <div className={styles.interview}>
        <h2 className={styles.head} >הרצתי מול מאות אמהות</h2>
        <div className={styles.interviewImageContainer}>
       
          <img src={show} alt="אמא שיר הרצאות" className={styles.interviewImage} />
        </div>
      </div>
      <div className={styles.statistics}>
        <h2 className={styles.head}>עברו אצלי</h2>
      <CountingUp/>
      </div>
      <Recommends/>
     <div className={styles.cta}>
     <p className={styles.description}>ועכשיו מגיעות ההזדמנויות שלך!</p>
     <Button text="לחצי כאן להצטרף לקהילת הווצאפ של האמהות"  icon={mom} href="https://chat.whatsapp.com/DzdJja5a4MjFFJgJIH2Mu4"/>
   </div>
 
  </>
  );
};

export default AboutMe;