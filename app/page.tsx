"use client"
import { useState } from "react"


export default function Home(){
  const [color, setColor] = useState("red")
  return (
    <>
    <div className="item">
    <h1>This is a new website</h1>
    <h2>Hi what are you doing</h2>
    <h3>Nothing just chillin with your mum</h3>
    <h4>But your mum got my winni inside her</h4>
    <h5>Fuck off!!</h5>
    <h6>OKAY, WITH YOUR MUM</h6>
    <button style={{backgroundColor:color}} onClick={()=>{
      if (color == "red"){
        setColor("blue")
      }
      else{
        setColor("red")
      }
      }}>ClickMe</button>
      {color=="blue"?<p>Button is clicked</p>:<p></p>}
    </div>
    </>
  )
}