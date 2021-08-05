
import { useState } from 'react';
import {css , cx} from '@emotion/css'

const width = window.innerWidth;

const durationWidth = width/200;

const height = window.innerHeight;

const durationHight = height/200;





function App() {
  const move = css`
  .parent{
    background-color: red;
    width: 150px;
    height: 150px;
    margin: 10px 0 0 10px;
    position:absolute;
    animation: rigth ${durationWidth}s  linear forwards;
    
  }
  
  @keyframes rigth {
    from{
      left: 0;
    }
  
    to {
      left: ${width}px;
      
    }
  }
  
 
  `
  const [startDate, setStartDate] = useState(Date.now());
  const [direction, setDirection] = useState("Bottom");
  const [distanceLeft, setDistanceLeft] = useState(0);
  const [distanceButtom, setDistanceButtom] = useState(0);
  
  
  
  const stopAndMoving = () => {
    const endDate = (Date.now() - startDate)/1000;
    setStartDate(Date.now());
    
   if (direction === "Bottom"){
   
    const left = endDate * 200;
    setDistanceLeft(left);
    console.log(left)

    const element = document.getElementById("square").style;
    element.animationName = "bottom";
    element.animationDuration= durationHight + "s";
    element.animationTimingFunction="linear";
    element.animationFillMode = "forwards";   
  

    css`
    @keyframes bottom {
      from{
        top: 0;
        background-color : blue;
        left: ${left}px
      }
    
      to {
        top: ${height}px;
        background-color : blue;
        left: ${left}px
      }
    }
        
    `
    setDirection("Left")
  
  } 
  
  else if (direction === "Left"){
   
  
    
     const top = endDate * 200;
     setDistanceButtom(top)
   

    const element = document.getElementById("square").style;
    element.animationName = "left";
    element.animationDuration= durationWidth + "s";
    element.animationTimingFunction="linear";
    element.animationFillMode = "forwards";   
  

    css`
    @keyframes left {
      from{
        top : ${top}px;
        background-color : black;
        left: ${distanceLeft}px
      }
    
      to {
        top : ${top}px;
        background-color : black;
        left: 0px
      }
    }
        
    `
    setDirection("Top")
  }
  else if (direction === "Top"){
   
   
    
     const right = endDate * 200;
     console.log(right)
     
   

    const element = document.getElementById("square").style;
    element.animationName = "right";
    element.animationDuration= durationHight + "s";
    element.animationTimingFunction="linear";
    element.animationFillMode = "forwards";   
  

    css`
    @keyframes right {
      from{
        top : ${distanceButtom}px;
        background-color : green;
        margin-left : ${distanceLeft-(right-150)}px
      }
    
      to {
        top : 0px;
        background-color : green;
        margin-left : ${distanceLeft-(right-150)}px
      }
    }
        
    `
    setDirection("Bottom")
  }
  

  }

  

  return (
    <div className={cx(move)}>
     <div className="parent" id="square" onClick={() => {stopAndMoving()}}></div>
       
    </div>
  );
}

export default App;
