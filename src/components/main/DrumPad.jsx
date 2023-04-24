import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayContent } from "../../store/slices/display";

export const DrumPad = () => {
  const text= useSelector((state)=> state.displayReducer.display)
  const dispatch= useDispatch()
  const play=(name,src)=>{
      dispatch(setDisplayContent(name))
      return new Audio(src).play()
  }
  window.addEventListener("keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "q"){
      play("Heater 1","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
    }
    if (keyName === "w"){
      play("Heater 2","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
    }
    if (keyName === "e"){
      play("Heater 3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
    }
    if (keyName === "a"){
      play("Heater 4","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
    }
    if (keyName === "s"){
      play("Clap","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
    }
    if (keyName === "d"){
      play("Open HH","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
    }
    if (keyName === "z"){
      play("Kick n' Hat","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
    }
    if (keyName === "x"){
      play("Kick","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
    }
    if (keyName === "c"){
      play("Closed HH","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
    }
  })
  return (
    <div>
      <div className="drums-container" id="drum-machine">
        <button className="drumb-item" onClick={()=>{play("Heater 1","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")}} id="Q">Q</button>
        <button className="drumb-item" onClick={()=>{play("Heater 2","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")}} id="W">W</button>
        <button className="drumb-item" onClick={()=>{play("Heater 3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")}} id="E">E</button>
        <button className="drumb-item" onClick={()=>{play("Heater 4","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")}} id="A">A</button>
        <button className="drumb-item" onClick={()=>{play("Clap","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")}} id="S">S</button>
        <button className="drumb-item" onClick={()=>{play("Open HH","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")}} id="D">D</button>
        <button className="drumb-item" onClick={()=>{play("Kick n' Hat","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")}} id="Z">Z</button>
        <button className="drumb-item" onClick={()=>{play("Kick","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")}} id="X">X</button>
        <button className="drumb-item" onClick={()=>{play("Closed HH","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")}} id="C">C</button>
        <div className="display">{text}</div>
      </div>
    </div>
  );
};
