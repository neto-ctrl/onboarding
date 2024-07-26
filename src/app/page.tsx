import styles from "./newpage.module.css";

export default function Home() {
  return (
    <main style={{background:"black", padding:15}}>
        <div style={{background:"grey", padding:15}} className="container">  
          <span>Vamos compra uma casa</span> 
             <div style={{display:"flex",flexDirection:"column", backgroundColor:"red", padding:20, gap:20 }}>
              <div style={{display:"flex", gap:5}}>
              <div style={{width:50, height:50, background:"blue"}} /> 
              
                <div style={{display:"flex", flexDirection:"column"}}>
                  
                  <span> Comprar uma casa</span>
                  <span> meta de economia</span>
                </div>

    
              </div>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <span> valor</span>
                <span>data</span>

              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <div  style={{display:"flex", justifyContent:"space-around"}}>
                  <span>economia mensal</span>
                  <span> valor</span>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate veniam dolorem modi odio impedit nesciunt qui aliquam minima doloremque. Aperiam quaerat quod sunt laudantium dolorum voluptates ipsum necessitatibus eveniet!</span>
                </div>

              </div>
             </div>



        </div>
      
      
    </main>
  );
}
