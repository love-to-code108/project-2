import { useState } from "react"
import "../App.css"
import propTypes from "prop-types"






export const InputFieldAndCurrencySelector = ({
    fromTo
}) => {

    // THE CURRENCY SELECTOR ARRAY
    const currencyArray = ["INR", "USD"]
    const [currentCurrency , setCurrentCurrency] = useState("USD")








    // TAKING THE CURRENCY TYPE " USD , INR " FROM THE USER
    const currencySelectedFromDropDown = (event) => {
         setCurrentCurrency(() => event.target.value)
    }







    // TAKING THE CURRENCY VALUE FROM THE USER " 20 , 30 "
    const[userInputCurrencyValue , setUserInputCurrencyValue]  = useState(0);

    const currencyInput = (event) => {
         setUserInputCurrencyValue(() => event.target.value) ;
    }
    
    console.log(userInputCurrencyValue);




    // CHECKING THE VALUE INSIDE OF FROM TO DISABLE OR ENABLE INPUT
    let disableEnableInput = true;
    // console.log(fromTo)
    if(fromTo == "To"){
        disableEnableInput = false;
    }













    return (
        <div className=" flex justify-center items-center">



            {/* the input box */}
            <div className="flex flex-col mr-3 text-3xl font-league">
                <label htmlFor="currencyInput">{fromTo}</label>
                <input className=" border-2 border-black"
                 id="currencyInput" type="number" min={0} onChange={currencyInput} value={userInputCurrencyValue} 
                 disabled = {disableEnableInput ? false : true}
                 
                 
                 />
            </div>







            {/* the selector for the multiple currencies */}
            <div className="">
                <select className=" bg-black text-white px-1 
                relative top-[1.1rem] text-3xl border-2 border-black cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black"
                 value={currentCurrency} id="" onChange={currencySelectedFromDropDown}>
                    {
                        currencyArray.map((value, index) => {
                            return (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}



InputFieldAndCurrencySelector.propTypes = {
    fromTo : propTypes.string,
}
