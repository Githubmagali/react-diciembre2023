import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Calculator from './components/Calculator';
import ToggleSounds from './components/ToggleSounds';

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}



function App() {
  const[allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = useMemo(()=>{
    return[{
      name: "full body workout",
      numExercises: partOfDay === "AM" ? 9 :8,
    },{
      name: "Arms + legs",
      numExercises: 6,
    },{
      name: "arms only",
      numExercises: 3,
    },{
      name: "legs only",
      numExercises: 4,
    },{
      name: "butt",
      numExercises: partOfDay === "AM" ? 5 : 4,
    },
  ];
  //tells useMemo that the result should be recalculated only when partOfDay changes.
  }, [partOfDay])

  //Update time every second with useEffect
  useEffect(function(){
    setTime(formatTime(new Date()));
  }, []);

  return (
    <div>
    <h1>Work timer</h1>
    <p>For your workout on {time}</p>
    <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
    <Calculator workouts={workouts} allowSound={allowSound}/>
    </div>
  );
}

export default App;
