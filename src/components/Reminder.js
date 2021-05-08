import React from "react";

const Reminder = ({days, hours,minutes,seconds,timeend}) => {
    return(
        <div  className=" bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 flex flex-column items-center justify-center">
            <h1>CountDown Ends at</h1>
            <h1>{timeend}</h1>
        <div  className=" bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 flex items-center justify-center">
            <div><p >{days} Days/</p></div>
            <div><p >{hours} Hours/</p></div>
            <div><p >{minutes} Minutes/</p></div>
            <div><p >{seconds} Seconds</p></div>

        </div>
        </div>
    );
}

export default Reminder;