import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayContent } from "../../store/slices/display";

export const DrumPad = () => {
  const audiofiles={
    heater1: {name:"Heater 1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    heater2: {name:"Heater 2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    heater3: {name:"Heater 3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    heater4: {name:"Heater 4",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    clap: {name:"Clap",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    openhh: {name:"Open HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    kicknhat: {name:"Kick n' Hat",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    kick:{name:"Kick",scr:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    closedhh: {name:"Closed HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
  }
  const text= useSelector((state)=> state.displayReducer.display)
  const dispatch= useDispatch()
  const play=(name,src)=>{
      dispatch(setDisplayContent(name))
      document.querySelector(src).play()
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
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.heater1.name,"Q")}}>Q</button>
          <audio src={audio.heater1.src} id="Q"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.heater2.name,"W")}}>W</button>
          <audio src={audio.heater2.src} id="W"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.heater3.name,"E")}}>E</button>
          <audio src={audio.heater3.src} id="E"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.heater4.name,"A")}}>A</button>
          <audio src={audio.heater4.src} id="A"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.clap.name,"S")}}>S</button>
          <audio src={audio.clap.src} id="S"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.openhh.name,"D")}}>D</button>
          <audio src={audio.openhh.src} id="D"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.kicknhat.name,"Z")}}>Z</button>
          <audio src={audio.kicknhat.src} id="Z"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.kick.name,"X")}}>X</button>
          <audio src={audio.kick.src} id="X"></audio>
        </div>
        <div className="drum-pad">
        <button className="drumb-item" onClick={()=>{play(audio.closedhh.name,"C")}}>C</button>
          <audio src={audio.closedhh.src} id="C"></audio>
        </div>
        <div className="display">{text}</div>
      </div>
    </div>
  );
};
