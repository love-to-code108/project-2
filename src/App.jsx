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
  useRecoilValue,
  useRecoilState
} from 'recoil';

import { inputCurrencyDataFrom, inputCurrencyDataTo } from "./recoil/atom.js"



function App() {

  return (
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  )
}

export default App

















function Mainapp() {




  // ATOM
  const inputCurrencyDataFetch = useRecoilValue(inputCurrencyDataFrom);
  const [targetCurrencyData, setTargetCurrencyData] = useRecoilState(inputCurrencyDataTo)

  // console.log("The Value :",inputCurrencyDataFetch);





  // INITIALISING THE API KEY HERE

  const freeCurrencyApi = new Freecurrencyapi(import.meta.env.VITE_API_KEY);
  console.log("SEX:",inputCurrencyDataFetch);
  console.log("SEX:",targetCurrencyData);

  const conversion = () => {
    freeCurrencyApi.latest({
      base_currency: inputCurrencyDataFetch,
      currencies: targetCurrencyData,
    }).then(response => {
      console.log(response.data);
    });
  }








  return (
    <div className=' w-[100%] h-[100vh] flex flex-col items-center'>

      {/* the name of the app */}
      <div className='mt-[4rem] 
      xl:mb-[14vh]
      2xl:mb-[24vh]'>
        <h1 className=' text-6xl font-league font-semibold'>Currency Converter</h1>
      </div>



      {/* The input fields */}
      <div className=' flex flex-col justify-center items-center relative'>





        <InputFieldAndCurrencySelector fromTo={"From"} />
        <InputFieldAndCurrencySelector fromTo={"To"} />







        {/* the switch button */}
        <div className=' relative bottom-[5.7rem] right-[2rem] cursor-pointer'>
          <div className=' bg-black w-[4rem] h-[4rem] rounded-full flex justify-center items-center border-2 border-white'>
            <img className=' h-[1.5rem]' src={whiteUpArrow} alt=" white up arrow" />
            <img className=' h-[1.5rem]' src={whiteDownArrow} alt=" white down arrow" />
          </div>
        </div>







        {/* the convert button */}
        <div className=' w-[100%] relative bottom-[2rem]'>
          <button className=' font-league text-3xl font-semibold bg-black text-white px-3 pt-2 pb-1 hover:bg-white 
           hover:text-black hover:border-2 hover:border-black' onClick={conversion}> Convert </button>
        </div>






      </div>

    </div>
  )
}
