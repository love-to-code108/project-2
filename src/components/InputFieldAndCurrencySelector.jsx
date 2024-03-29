import { useState } from "react"
import "../App.css"
import propTypes from "prop-types"






export const InputFieldAndCurrencySelector = ({
    fromTo
}) => {


    const currencyArray = ["INR", "USD"]
    const [currentCurrency , setCurrentCurrency] = useState("USD")



    const currencySelectedFromDropDown = (event) => {
         setCurrentCurrency(() => event.target.value)
    }



    return (
        <div className=" flex justify-center items-center">



            {/* the input box */}
            <div className="flex flex-col mr-3 text-3xl">
                <label htmlFor="currencyInput">{fromTo}</label>
                <input className=" border-2 border-black"
                 id="currencyInput" type="number" min={0} />
            </div>


            {/* the selector for the multiple currencies */}
            <div className="">
                <select className=" bg-black text-white px-1 
                relative top-[1.1rem] text-3xl border-2 border-black"
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
