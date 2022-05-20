export default function Question({ question, answers, selectAnswer}){
    return(
        <div>
            <h3 className="question">{question}</h3>
            <div className="answer--container">
                <button 
                    className="answer button"
                    onClick={selectAnswer}
                >
                    {answers[0]}
                </button>
                <button 
                    className="answer button"
                    onClick={selectAnswer}
                >
                    {answers[1]}
                </button>
                <button 
                    className="answer button"
                    onClick={selectAnswer}
                >
                    {answers[2]}
                </button>
                <button 
                    className="answer button"
                    onClick={selectAnswer}
                >
                    {answers[3]}
                </button>
            </div>
            <hr />
        </div>
    )
}