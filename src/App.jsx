import {useState} from "react";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";


function App() {

  const[isStarted, setIsStarted] = useState(false);

  const StartQuiz = () =>{
    setIsStarted(true);
  }

  const startPage = <StartPage start={StartQuiz} />
  const questionsPage= <Questions />

  return(
    <main>
      {isStarted === false ? startPage : questionsPage}
    </main>
  )
}

export default App;
