import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-screen h-screen flex justify-center" style={{ backgroundColor: color }}>  
           <div className="flex items-end my-3">
             <div className="flex flex-wrap justify-center items-center gap-3  px-8 py-4 rounded-full" style={{ backgroundColor: "yellow" }}>
               <button onClick={()=>{setColor("blue")}}  className="text-white rounded-full " style={{ backgroundColor: "blue" }}>
                   BLUE
               </button>
               <button onClick={()=>{setColor("green")}} className="text-white rounded-full " style={{ backgroundColor: "green" }}>
                   GREEN
               </button>
               <button onClick={()=>{setColor("red")}} className="text-white rounded-full " style={{ backgroundColor: "red" }}>
                   RED
               </button>
               <button onClick={()=>{setColor("white")}} className="text-black rounded-full " style={{ backgroundColor: "white" }}>
                   Default
               </button>
             </div>
           </div>
    </div>
  );
}

export default App;
