import styles from "./ThirdScreen.module.css"
import wound from "../Icons/wired-outline-427-wound-plaster.json"
import tree from "../Icons/wired-outline-1851-bonsai.json"
import girl from "../Icons/wired-outline-633-female-standing.json"
import Timeline from "../components/timeline/TimeLine"
const ThirdScreen=()=>{
    const timelineItems = [
        {
          icon: girl,
          title: 'שלב 1: חזרה לילדה הפנימית',
          description: 'אולי הספקת לשכוח אותה, אבל היא לא שכחה אותך. דרך כלים מעולם ה-NLP אני דואגת לך למפגש עוצמתי של פעם בחיים עם הילדה הפנימית שאת.'
        },
        {
          icon: wound,
          title: 'שלב 2: מוצאות את הפצע',
          description: 'לכל אחת מאיתנו יש פצע שקיים בנו, שהפך להיות חלק מאיתנו. גם אם שכחת אותו, או שנדמה שהוא כבר לא משמעותי, הוא נמצא בתת המודע שלך, הצמיח שורשים עבים וחזקים ומנהל אותך עד היום, כן גם בהורות שלך. בתהליך אנחנו מאתרות את הנקודה המשמעותית בחייך, שנטעה בך שורשים, הולידה אמונות מגבילות, דפוסי התנהגות ואוטומטים שלא משרתים אותך ואפילו פוגעים בך ובילדים שלך ועוקרים אותו מהשורש.'
        },
        {
          icon: tree,
          title: 'שלב 3: נוטעים עץ חדש',
          description: 'לאורך תהליך הליווי, תקבלי תיבת אוצר עם אין ספור כלים להתמודדות בהורות שלך, אבל השינוי יקרה באמת כשתצליחי להילחם באוטומטים שלך. זה בדיוק מה שנעשה כאן, נשתול זרע חדש, של אמונות חדשות שיובילו לדפוסי התנהגות חדשים מתוך בחירה מודעת - לאמא שאת חולמת להיות.'
        }
      ];
return <>
<Timeline items={timelineItems} />
</>
}
export default ThirdScreen