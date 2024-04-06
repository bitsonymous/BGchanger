import { useState } from "react";

function App() {
  const [color, setColor] = useState("Red")
  const changeColor = (colorName) => {
    setColor(colorName);
  }
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen duration-200" style={{backgroundColor: color}}>
      <div className ="bg-transparent justify-items-center flex ">
        <button className = "btn rounded-xl bg-slate-800 text-white border-white border outline-offset-2 shadow-lg m-4 w-32 h-16" onClick={() => changeColor("Olive")}>Olive</button>
        <button className = "btn rounded-xl bg-slate-800 text-white border-white border outline-offset-2 shadow-lg m-4 w-32 h-16" onClick={() => changeColor("Blue")}>Blue</button>
        <button className = "btn rounded-xl bg-slate-800 text-white border-white border outline-offset-2 shadow-lg m-4 w-32 h-16" onClick={() => changeColor("Red")}>Red</button>
        <button className = "btn rounded-xl bg-slate-800 text-white border-white border outline-offset-2 shadow-lg m-4 w-32 h-16" onClick={() => changeColor("Green")}>Green</button>
        <button className = "btn rounded-xl bg-slate-800 text-white border-white border outline-offset-2 shadow-lg m-4 w-32 h-16" onClick={() => changeColor("Yellow")}>Yellow</button>
      </div> 
      </div>
     
    </>
  )
}

export default App
