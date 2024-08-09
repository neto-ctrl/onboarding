'use client'
import dayjs from "dayjs"
import styles from "../newpage.module.css"
import { use, useState } from "react"




//*dayjs.extend(calendar);
//var calendario = dayjs("22/02/2020").calendar(null,{
// sameElse: "DD/MM/YYYY"
//    });


const mes = dayjs().format('MMMM')
const ano = dayjs().format('YYYY');

type Type = "add" | "subtract";



function periodCalculation(type: Type, period: string, minDate: string) {

  const today = dayjs().format("YYYY-MM-DD")
  const currentPeriod = dayjs(period)
  const typedPeriod = currentPeriod[type](1, "month")
  const year = typedPeriod.format("YYYY")
  const month = typedPeriod.format("MMMM")
  const updatedPeriod = typedPeriod.format("YYYY-MM-DD")
  const isAfterMinPeriod =typedPeriod.isAfter(minDate,"month")
  const monthDiff = typedPeriod.diff(today,"month")

  return { year, month, updatedPeriod, isAfterMinPeriod,today,monthDiff}

}
interface DateChange {
  monthsDiff: number;
}

interface Props {
  initialPeriod: string;
  minDate: string;
  onDateChange?: (params:DateChange) => void;
  
}



function ChooseDate({ minDate, initialPeriod,onDateChange }: Props) {

  
  const [period, setPeriod] = useState(initialPeriod)
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  

  function handlePeriodCalculation(type: Type) {

    const calculation = periodCalculation(type, period, minDate,)
     


    if (calculation.isAfterMinPeriod) {
      setYear(calculation.year)
      setMonth(calculation.month)
      setPeriod(calculation.updatedPeriod)
      onDateChange?.({monthsDiff:calculation.monthDiff})
      
       

    }

  }

  return (

    <div  >
      <span><b>Data</b></span>
      <div className={styles.inputdedata}>
        <div onClick={() => handlePeriodCalculation("subtract")}> {'<'}</div>
        <div className={styles.data}>
          <div>{year}</div>
                
          <div>{month} </div>
        </div>
        <div onClick={() => handlePeriodCalculation("add")}>{'>'}</div>

      </div>
    </div>


  )

}

export default ChooseDate







