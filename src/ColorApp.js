
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <Setcolor />
    </div>
  );
}

function Setcolor(){
  const[color,setcolor]=useState("");
     const styles={
        background : color
     }
     const intial_colorlist =["red","green","blue","yellow","pink"]
    const [colorlist,setcolorlist] =useState(intial_colorlist);

   return (
       <div>
         <input style={styles} onChange={(res)=>{
           setcolor(res.target.value)
            } } placeholder='Enter color name'></input>
         <button  onClick={()=>{
           setcolorlist([...colorlist,color])
             }}>set colour</button>
           {colorlist.map((color)=><Colorbox color={color}/>)}
       </div>
   )
}

function Colorbox({color}){
    const styles ={
       height : "25px",
       width : "200px",
       backgroundColor : color,
       marginTop : "10px"
  }
   return (
      <div style={styles}></div>
   )
}

export default App;