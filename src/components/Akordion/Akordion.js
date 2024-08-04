import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../button/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px #555',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(45deg, rgba(243,237,225,1) 0%, rgba(236,224,200,1) 100%)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

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
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">זמן לענות על השאלות שלכן</div>
      <DropdownAccordion title="הבעיות שאני חווה עם הילד יכולות להסתדר עם הגיל שלו?" content="
5 השנים הראשונות  של החיים הן הכי קריטיות להתפתחות הילד האישיות של הילד שלך מתעצבת - מה שנעשה איתם עכשיו יתבטא בשנים הבוגרות שלהם - החל מתהליכי חשיבה ועד לרגשות האישיים שלך בעת תסכול וכעס - הוא ישקף אותך ברוב הזמן 

אם לא תפתרי את דרכי ההתנהלות האישיים שלך , איך המצב ישתנה?
כל עוד ההתנהגות הזו תמשיך , התוצאות לא ישתנו ואת מאבדת זמן יקר!
" />
      <DropdownAccordion title="אני מפחדת לקחת ליווי ולהרגיש אמא לא טובה" content="כמה שווה לך רוגע נפשי ושקט במהלך היום + ילד ממושמע - התפתחות ושינוי אישי ויחס אישי ממני לאורך כל התהליך?
מה שהסביבה שלך תגיד או תחשוב לא אמור לעניין אותך! את לוקחת את הצעד הזה בשבל עצמך ובשביל לחיות את החיים שאת באמת רוצה - להנות מהילדים שלך!
" />

    </div>

  
 </>
}
