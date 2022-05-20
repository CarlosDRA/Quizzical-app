import Question from "./Question"


export default function Questions({ data, handleSelection }){

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

    return(
        <section className="questions--container">
            {questionElements}
        </section>
    )
}