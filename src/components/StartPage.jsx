export default function StartPage(props){
    return(
        <div className="start--page">
            <h1 className="title">Quizzical</h1>
            <p className="text">Test your general knowledge with this quick and fun quiz!<br/>
            Press the button to start and be sure to select the correct answers.</p>
            <button 
                onClick={props.start}
                className="button"
            >
                Start quiz
            </button>
        </div>    
    )
}