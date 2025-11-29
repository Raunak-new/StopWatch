import React,{useState,useEffect,useRef} from "react";

function StopWatch(){
	const[isRunning,setIsRunning]=useState(false);
	const[elapsed,setElapsed]=useState(0);
	const intervalIdRef=useRef(null)
	const StartTime =useRef(0)
	

	useEffect(()=>{
		if(isRunning){
			intervalIdRef.current =setInterval(()=>{
				setElapsed(Date.now()-StartTime.current)
			},10)
		}

		return()=>{
			clearInterval(intervalIdRef.current)
		}
	},[isRunning])


	function Start(){
		setIsRunning(true);
		StartTime.current=Date.now()-elapsed;
		//console.log(StartTime.current)
	}
	function Stop(){
	setIsRunning(false)

	}
	function Reset(){
		setElapsed(0)
		isRunning(false)

	}
	function FormatTime(){
		let hours=Math.floor(elapsed/(1000*60*60))
		let mins=Math.floor(elapsed/(1000*60)%60)
		let secs=Math.floor(elapsed/(1000)%60)
		let millisecs=Math.floor(elapsed/(1000/10))

		hours=String(hours).padStart(2,"0")
		mins=String(mins).padStart(2,"0")
		secs=String(secs).padStart(2,"0")
		millisecs=String(millisecs).padStart(2,"0")
	
		return`${hours}:${mins}:${secs}:${millisecs}`;
	}


	return(
		<div className="stopwatch">
			<div className="display">{FormatTime()}
			</div>
			<div className="Buttons">
				<button className="Start" onClick={Start}>Start</button>
				<button className="Stop" onClick={Stop}>Stop</button>
				<button className="Reset" onClick={Reset}>Reset</button>
			</div>
		</div>
	)
}
export default StopWatch;