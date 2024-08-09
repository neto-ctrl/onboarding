"use client"

import { Bubblegum_Sans } from "next/font/google";
import ChooseDate from "./components/Data";
import styles from "./newpage.module.css";
import Header from "./components/Header";
import dayjs from "dayjs";
import { use, useState } from "react"


export default function Home() {
  
  const today = dayjs()
  const initialtPeriod= today.format('YYYY-MM-DD')
  const minPeriod = today.subtract(1, 'month').format('YYYY-MM-DD')
  const [conta, setCalculation] = useState()
  
  function handleCalculation(monthsDiff){
    const value = valueCalculation(monthsDiff); setCalculation(value)
    console.log (value)
      
  }

  function valueCalculation (monthsDiff){
    const valor = inputValue
    const monthDiff = monthsDiff
    const conta = valor/monthDiff 
    
    return  conta
  }
  
  const [inputValue, setInputValue] = useState('');
  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  };
  

  
  
  
  return (

        
      <main className={styles.main}>
        <div className={styles.div1}>  
          <span className={styles.titulo}>Vamos escolher <b>uma meta</b></span> 
             <div className={styles.div2}>
              <div className={styles.div3}>
              <Header title="Buy a House" subtitle="Goal" />
    
              </div>
              <div className={styles.div6}>
                  <div className={styles.inputValueGoal}>
                    <span><b>Valor</b></span>
                    <input type="text" value={inputValue} onChange={handleChangeValue} />
                  </div>
                  <div >
                    <ChooseDate initialPeriod={minPeriod} minDate={minPeriod} onDateChange={(params)=>handleCalculation(params.monthsDiff)}  />
                  </div>
              </div>

              <div className={styles.div7}>
                <div  className={styles.div8}>
                  <span><b>Economia mensal</b></span>
                  <span>{conta}</span>
                </div>
                <div className={styles.div9}>
                  
                  <span>voce esta planejando meses de depositos para alcançar sua meta de $12,083.00 até julho de 2021</span>
                </div>

              </div>
             </div>



        </div>
      
      
    </main>
  );
}
