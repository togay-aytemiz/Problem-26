"use client"

import { useState } from "react"



export default function Stopwatch() {

  const [timer, setTimer] = useState(0)
  const [timerId, setTimerId] = useState(null);


  const handleStart = () => {
    const timerId = setInterval(() => {
      setTimer(pre => pre + 1)
    }, 1000)
    setTimerId(timerId)
  }

  const handleStop = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {timer}s</div>
      <div className='flex justify-between'>
        <button className='text-amber-500 font-bold' onClick={handleStop}>Durdur</button>
        <button className='text-green-500 font-bold' onClick={handleStart}>Başlat</button>
      </div>
    </div>
  )
}
