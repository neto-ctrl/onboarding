import styles from "./newpage.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.div1}>  
          <span className={styles.titulo}>Vamos escolher <b>uma meta</b></span> 
             <div className={styles.div2}>
              <div className={styles.div3}>
              <div className={styles.div4} /> 
              
                <div className={styles.div5}>
                  
                  <span><b> Comprar uma casa</b></span>
                  <span> Meta de economia</span>
                </div>

    
              </div>
              <div className={styles.div6}>
                <span><b>valor</b></span>
                <span><b>data</b></span>

              </div>

              <div className={styles.div7}>
                <div  className={styles.div8}>
                  <span>economia mensal</span>
                  <span>valor</span>
                </div>
                <div className={styles.div9}>
                  <span>voce esta planejando 5 meses de depositos para alcançar sua meta de $12,083.00 até julho de 2021</span>
                </div>

              </div>
             </div>



        </div>
      
      
    </main>
  );
}
