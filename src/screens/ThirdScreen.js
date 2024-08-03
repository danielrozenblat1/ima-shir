import styles from "./ThirdScreen.module.css"
import wound from "../Icons/wired-outline-427-wound-plaster.json"
import tree from "../Icons/wired-outline-1851-bonsai.json"
import girl from "../Icons/wired-outline-633-female-standing.json"
import Timeline from "../components/timeline/TimeLine"
const ThirdScreen=()=>{

    const timelineItems = [
        {
          icon: girl,
          title: 'שלב 1: לפני הפגישה',
          description: 'לפני התהליך אני עושה אבחון התפתחותי על ידי שאלון, כדי להכיר את מאפייני ההתפתחות והאישיות של הילד. ⁠בשיחה אני לומדת להכיר אתכם כהורים ואנשים, את האוטומטים שטבועים בכם עוד מילדותכם'
        },
        {
          icon: wound,
          title: 'שלב 2: פגישה והתאמת המסלול',
          description: '⁠בונה עבורכם תכנית הדרכה מותאמת אישית'
        },
        {
          icon: tree,
          title: 'שלב 3: מפגשים | ליווי',
          description: 'מתחילים! את הולכת לעבור תהליך מדהים במשך החודשים הבאים ולהפוך את זמן האמהות שלך לחלום!'
        }
      ];
return <>
<Timeline items={timelineItems} />


</>
}
export default ThirdScreen