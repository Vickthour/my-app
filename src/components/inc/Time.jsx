import React, {useState} from 'react'

export default function Time() {

    setInterval(updateTime, 1000);

    let time = new Date().toLocaleTimeString();
    
    const [say, setTime] = useState(time);

    function updateTime(){
      let newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }



    return (
      <div>
           <h1>{say}</h1>
      </div>
    )
  
}
