// COMPONENTS
import { InputFieldAndCurrencySelector } from './components/InputFieldAndCurrencySelector'


// CSS
import './App.css'

function App() {
  

  return (
    <div>
      <Mainapp/>
    </div>
  )
}

export default App















function Mainapp() {
  

  return (
    <div className=' bg-red-600 w-[100%] h-[100vh] flex justify-center items-center'>
      <div>
      <InputFieldAndCurrencySelector fromTo={"From"}/>
      <InputFieldAndCurrencySelector fromTo={"To"}/>
      </div>

    </div>
  )
}
