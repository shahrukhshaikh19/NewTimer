import React from "react";

const CalenderInput = ({CalendarInput, value,start}) => {
    return(
        <div>
            <div className="flex flex-column justify-between">
            <input className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5" type="date" id="InputField" onChange={CalendarInput} value={value}/>
            </div>
        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-navy" onClick={start}>Start</button>
        </div>
    );
}

export default CalenderInput;