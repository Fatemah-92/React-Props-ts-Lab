
interface Programmers {
    name: string,
    programmingLanguages?: string,
    yearsOfExperience?: number,
    company?: string
}

function Programming(props: Programmers) {
    return (
        <div className="programmers">
            <h2>{props.name}</h2>
            <h3>{props.programmingLanguages}</h3>
            <h3>{props.yearsOfExperience}</h3>
            <h3>{props.company}</h3>
        </div>  
    )
  }
  
  export default Programming