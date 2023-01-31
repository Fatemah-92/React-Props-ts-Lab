
import './App.css'
import Programming from './component/Programming'
import Companies from './component/Companies'
import Services from './component/Services'

function App() {

  return (
    <div className='container'>
      <div className="App">
        <Programming name={"Ali"} programmingLanguages={"paython"} yearsOfExperience={2} company={"Elm"}/>
        <Programming name={"Ahmad"} programmingLanguages={"js"} yearsOfExperience={5} company={"STC"}/>
        <Programming name={"Fahad"} programmingLanguages={"java"} yearsOfExperience={3} company={"Elm"}/>

        <Companies name={'Elm'}/>
        <Programming name={'Ali'}/>
        <Programming name={'Fahad'}/>
        <Services typesOfServices={'IT'} prices={3000} />

        <Companies name={'STC'}/>
        <Programming name={'Fahad'}/>
        <Services typesOfServices={'IT'} prices={4000} />

      </div>
    </div>
    
  )
}

export default App
