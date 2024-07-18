import Button from "../components/Ways/Button";
import styles from "./ForthScreen.module.css"
import check from "../Icons/wired-outline-427-wound-plaster.json"

const ForthScreen = (props) => {
  const buttons = [
    {
      text: "פגישת ייעוץ ממוקדת",
      description: "פגישת זום באורך שעה וחצי לקבלת הדרכה ממוקדת על בעיה ספציפית",
      icon: check,
      message: "היי שיר, אשמח לשמוע על פגישת ייעוץ ממוקדת"
    },
    {
      text: "ליווי צעד ראשון",
      description: "אבחון התפתחותי, תכנית הדרכה, פגישת ייעוץ וליווי צמוד לשבוע",
      icon: check,
      message: "היי שיר, אשמח לשמוע על ליווי צעד ראשון"
    },
    {
      text: "מסלול 1:1",
      description: "אבחון התפתחותי, תכנית הדרכה אישית, 4 מפגשים וליווי צמוד לחודש",
      icon: check,
      message: "היי שיר, אשמח לשמוע על מסלול 1:1"
    },
    {
      text: "מסלול פרימיום",
      description: "אבחון התפתחותי, תכנית הדרכה, 8 מפגשים וליווי צמוד ל-3 חודשים",
      icon: check,
      message: "היי שיר, אשמח לשמוע על מסלול פרימיום"
    },
    {
      text: "אבחון התפתחותי",
      description: "שאלון מקיף להורים לניתוח מאפייני הילד והמשפחה",
      icon: check,
      message: "היי שיר, אשמח לשמוע על אבחון התפתחותי"
    },
    {
      text: "תכנית הדרכה מותאמת אישית",
      description: "בניית תכנית המותאמת לצרכים הספציפיים של הילד והמשפחה",
      icon: check,
      message: "היי שיר, אשמח לשמוע על תכנית הדרכה מותאמת אישית"
    },
    {
      text: "גמילה מחיתולים",
      description: "הדרכה וטיפול בתהליכי גמילה מחיתולים וקשיי גמילה",
      icon: check,
      message: "היי שיר, אשמח לשמוע על גמילה מחיתולים"
    }
  ];

  return (
    <>
      <div className={styles.title}>מה אני מציעה לך?</div>
      <div className={styles.description}>אני מציעה סגנונות שונים של מסלולים - את מוזמנת לעיין ולהתרשם איזה מסלול הכי מתאים לך</div>
      <div className={styles.more}>לחצי על כל כפתור כדי לעבור לווצאפ ישיר איתי בנושא</div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          description={button.description}
          icon={button.icon}
          message={button.message}
        />
      ))}
    </>
  )
}

export default ForthScreen