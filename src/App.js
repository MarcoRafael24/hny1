import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";



function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Waiting for 2024..."])
  const particleInitialization = async(engine) =>{
    await loadFireworksPreset(engine)
  }
  function timeLeft(){
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate-nowDate
    return remainingTime
  }
  return (
<>

    <Particles
    init={particleInitialization}
    options={{preset:"fireworks"}}
    />
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="text-white text-4xl font-bold px-4 z-50">
        <Typewriter 
          words={newYearMessage} 
          loop={false}
          cursorStyle={"✨"}
          cursor
          />
      </span>
      <div className="font-bold text-2xl text-white z-50">
      <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat", "Tahun","Baru","2024"])}/>
      </div>
    <h3 className="font-bold text-2xl text-white z-50 footer">&copy; Marco Rafael M.</h3>
    </div>
</>
  );
}

export default App;
