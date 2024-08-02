'use client'
import dayjs from "dayjs"
import styles from "../newpage.module.css"
import { use } from "react"
import advancedFormat from "dayjs/plugin/advancedFormat"
import { format } from "path"


//*dayjs.extend(calendar);
//var calendario = dayjs("22/02/2020").calendar(null,{
// sameElse: "DD/MM/YYYY"
//    });


const mes = dayjs().format('MMMM')
const ano = dayjs().format('YYYY');



function Valordameta() {
    
    
    return(
        
        <div  >
             <span><b>Data</b></span>
            <div className={styles.inputdedata}>
            <div> {'<'}</div>
            <div className={styles.data}>
              <div>{ano}</div>
              <div>{ mes } </div>   
            </div>
            <div>{'>'}</div>
            
        </div>
      </div>


    )
    
}

export default Valordameta







