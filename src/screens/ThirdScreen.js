import styles from "./ThirdScreen.module.css"
import before from "../Icons/wired-outline-967-questionnaire.json"
import meet from "../Icons/wired-outline-973-appointment-schedule.json"
import after from "../Icons/wired-outline-981-consultation.json"
import Timeline from "../components/timeline/TimeLine"
const ThirdScreen=()=>{

    const timelineItems = [
        {
          icon:before,
          title: 'שלב 1: לפני הפגישה',
          description: 'לפני התהליך אני עושה אבחון התפתחותי על ידי שאלון, כדי להכיר את מאפייני ההתפתחות והאישיות של הילד. ⁠בשיחה אני לומדת להכיר אתכם כהורים ואנשים, את האוטומטים שטבועים בכם עוד מילדותכם'
        },
        {
          icon:meet,
          title: 'שלב 2: פגישה והתאמת המסלול',
          description: '⁠בונה עבורכם תכנית הדרכה מותאמת אישית'
        },
        {
          icon: after,
          title: 'שלב 3: מפגשים | ליווי',
          description: 'מתחילים! את הולכת לעבור תהליך מדהים במשך החודשים הבאים ולהפוך את זמן האמהות שלך לחלום!'
        }
      ];
return <>
<Timeline items={timelineItems}/>


</>
}
export default ThirdScreen