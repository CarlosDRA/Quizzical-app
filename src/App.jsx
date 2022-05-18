import {useState} from "react"
import StartPage from "./components/StartPage"


function App() {

  const[isStarted, setIsStarted] = useState(false)

  const StartQuiz = () =>{
    setIsStarted(true);
  }

  return(
    <StartPage start={StartQuiz} />
  )
}

export default App
