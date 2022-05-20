import {useEffect, useState} from "react";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";


function App() {

  const [data, setData] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [answers, setAnswers] = useState([])


  //I need to deeply understand this by my own, gotta read it later.
  function shuffleArr(array){
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }


  useEffect(() => {

    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(response => response.json())
    .then(data => {

      const questions = data.results.map(element => {

        let answersArr = [
          element.correct_answer,
          element.incorrect_answers[0],
          element.incorrect_answers[1],
          element.incorrect_answers[2]
        ]

        return({
          question: element.question,
          correctAnswer: element.correct_answer,
          answers: shuffleArr(answersArr)
        })
      })

      setData(questions)
    })
  }, [])

  const StartQuiz = () =>{
    setIsStarted(true);
  }

  const selectAnswer = (event) => {
    const selectedOption = event.target;
    const question = event.target.parentNode.parentNode.children[0].innerText;
    
    const allOptions = Array.from(event.target.parentNode.children);
    allOptions.map(answer => {
      if(answer.innerText !== selectedOption.innerText){
        answer.classList.remove("selected");
      }
    })

    selectedOption.classList.add("selected")

    setAnswers(prevState => {
      let newArr = [...prevState]
      const i = prevState.findIndex(element => element.question === question);
      if(i > -1){
        prevState[i].answer = selectedOption.innerText;
      } else {
        newArr.push({question: question, answer: selectedOption.innerText})
      }
      return newArr
    })
  }

  const startPage = <StartPage start={StartQuiz} />
  const questionsPage= <Questions data={data} handleSelection={selectAnswer} />

  return(
    <main>
      {isStarted === false ? startPage : questionsPage}
    </main>
  )
}

export default App;
