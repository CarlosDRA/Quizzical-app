import Question from "./Question"


export default function Questions({ data, handleSelection, answers }){

    const questionElements = data.map(element => {
        const question = element.question;
        const answers = element.answers;

        return(
            <Question 
                key={question}
                question={question}
                answers={answers}
                selectAnswer={handleSelection}
            />
        )
    })

    const checkAnswersButton = <button
        className="button check--button"
    >
        Check answers
    </button>

    return(
        <section className="questions--container">
            {questionElements}
            {answers === 10 && checkAnswersButton}
        </section>
    )
}