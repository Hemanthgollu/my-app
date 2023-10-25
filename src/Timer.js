import { useState, useEffect } from "react";
function Timer() {
    const idleTime = 5;
    let completedTimeInSeconds = 0;
    const [timerStr, setTimerStr] = useState('00:05');
    let intervalFunc;
    useEffect(() => {
        intervalFunc = setInterval(timer,1000);
        return () => {
            clearInterval(intervalFunc); 
        };
    },[]);
    const appendZero = (value) => {
        return value < 10 ? '0' + value : value;
    };
    const timer = () => {
        completedTimeInSeconds++; 
        const timeLeftInSeconds = (idleTime - completedTimeInSeconds) % 60;
        const timeLeftInMins = parseInt((idleTime - completedTimeInSeconds) / 60);
        setTimerStr(`${appendZero(timeLeftInMins)}:${appendZero(timeLeftInSeconds)}`);
        if (idleTime <= completedTimeInSeconds) {
            clearInterval(intervalFunc); 
        }

    };
    return(
        <div className = "container">
            <div className="row">
                <div className = "col-sm">
                    <h2>time left : {timerStr}</h2>
                </div>
            </div>
        </div>

    )
};
export default Timer;