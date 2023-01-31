
interface ServicesInfo {
    typesOfServices: string,
    prices: number,
}

function Services(props: ServicesInfo) {
    return (
        <div className="programmers">
            <h2>{props.typesOfServices}</h2>
            <h3>{props.prices}</h3>
        </div>  
    )
  }
  
  export default Services