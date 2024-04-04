// COMPONENTS
import { InputFieldAndCurrencySelector } from './components/InputFieldAndCurrencySelector'

// CSS
import './App.css'

// ASSETS
import whiteUpArrow from "./assets/White_UpArrow.svg"
import whiteDownArrow from "./assets/White_DownArrow.svg"

// FREE CURRENCY API
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// RECOIL
import {
  RecoilRoot,
  useRecoilState
} from 'recoil';

import { inputCurrencyDataFrom, inputCurrencyDataTo, takingUserInputFromInputCurrencyAtom, targetCurrencyValueAtom } from "./recoil/atom.js"




function App() {

  return (
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  )
}

export default App














// THE MAIN APP COMPONENT

function Mainapp() {




  // ATOM
  const [inputCurrencyDataFetch , setInputCurrencyDataFetch] = useRecoilState(inputCurrencyDataFrom);
  const [targetCurrencyData, setTargetCurrencyData] = useRecoilState(inputCurrencyDataTo);
  const [targetCurrencyValue, setTargetCurrencyValue] = useRecoilState(targetCurrencyValueAtom);
  const [takingUserInputFromInputCurrency , setTakingUserInputFromInputCurrency ] = useRecoilState(takingUserInputFromInputCurrencyAtom)

  // console.log("The Value :",inputCurrencyDataFetch);





  // INITIALISING THE API KEY HERE
  const freeCurrencyApi = new Freecurrencyapi(import.meta.env.VITE_API_KEY);



  // THE CONVERT BUTTON FUNCTION
  const conversion = () => {
    freeCurrencyApi.latest({
      base_currency: inputCurrencyDataFetch,
      currencies: targetCurrencyData,
    }).then(response => {

       // CALCULATING THE VALUE
      //  console.log("THE USER INPUT :",takingUserInputFromInputCurrency)

      setTargetCurrencyValue(() => Math.round(response["data"][targetCurrencyData] * takingUserInputFromInputCurrency * 100)/100);
    });

  }


  // THE SWITCH CURRENCY FUNCTION
  const switchCurrency = () => {
    setTargetCurrencyData(() => inputCurrencyDataFetch);
    setInputCurrencyDataFetch(() => targetCurrencyData);
  }







  return (
    <div className=' w-[100%] sm:h-[100vh] flex flex-col items-center'>

      {/* the name of the app */}
      <div className=' w-[100%] flex justify-center mt-[3rem] mb-[4rem] sm:mt-[4rem] 
      sm:mb-[14vh]
      md:mb-[14vh]
      lg:mb-[14vh]
      xl:mb-[14vh]
      2xl:mb-[24vh]'>
        <h1 className='text-4xl font-bold sm:text-5xl md:text-5xl lg:text-6xl font-league sm:font-semibold'>Currency Converter</h1>
      </div>



      {/* The input fields */}
      <div className=' flex flex-col justify-center items-center relative'>





        <InputFieldAndCurrencySelector fromTo={"From"} />
        <InputFieldAndCurrencySelector fromTo={"To"} />







        {/* the switch button */}
        <div className=' relative bottom-[-8rem] sm:bottom-[5.7rem] sm:right-[2rem] cursor-pointer' onClick={switchCurrency}>
          <div className=' bg-black w-[4rem] h-[4rem] rounded-full flex justify-center items-center border-2 border-white'>
            <img className=' h-[1.5rem]' src={whiteUpArrow} alt=" white up arrow" />
            <img className=' h-[1.5rem]' src={whiteDownArrow} alt=" white down arrow" />
          </div>
        </div>







        {/* the convert button */}
        <div className=' w-[100%] relative bottom-[2.5rem] sm:bottom-[2rem]'>
          <button className=' font-league text-3xl font-semibold bg-black text-white px-3 pt-2 pb-1 hover:bg-white 
           hover:text-black hover:border-2 hover:border-black' onClick={conversion}> Convert </button>
        </div>






      </div>

    </div>
  )
}
