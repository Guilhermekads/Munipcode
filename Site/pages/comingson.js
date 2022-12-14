import React, { useEffect, useState } from 'react';
import Comingson from '../components/Coming-son';


const Comingsonpage= () => {
  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval

  const startTimer=()=>{
    const countDownDate = new Date('Feb 2, 2023').getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days =  Math.floor(distance / (24 * 60 * 60 * 1000))

      const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000*60*60))

      const minutes = Math.floor(distance % ( 60 * 60 * 1000) / (1000*60))

      const seconds = Math.floor(distance % (60 * 1000) / 1000)

      if(distance < 0){

        clearInterval(interval.current)
      }else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    })
  }

  useEffect(()=>{
    startTimer()
  })

  return(
    <Comingson
    timerDays={timerDays}
    timerHours={timerHours}
    timerMinutes={timerMinutes}
    timerSeconds={timerSeconds}
    />
    )
}

export default Comingsonpage;