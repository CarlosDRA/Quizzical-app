export default function StartPage(props){
    return(
        <>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.start}>Start quiz</button>
        </>    
    )
}