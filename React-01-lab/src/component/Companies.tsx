
interface CompaniesInfo {
    name: string,
    numberOfEmployees?: string,
    yearFounded?: number,
}

function Companies(props: CompaniesInfo) {
    return (
        <div className="programmers">
            <h2>{props.name}</h2>
            <h3>{props.numberOfEmployees}</h3>
            <h3>{props.yearFounded}</h3>
        </div>  
    )
  }
  
  export default Companies