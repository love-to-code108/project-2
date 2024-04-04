import { useState } from "react"
// import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import propTypes from "prop-types"
import "../App.css"

// IMPORTING AN ATOM 
import { inputCurrencyDataFrom , inputCurrencyDataTo } from "../recoil/atom.js"
import { useRecoilState } from "recoil"





/* SOME IMPORTANT COMMENTS
THE USER INPUT CURRENCY VALUE IS STORED INSIDE THE 
userInputCurrencyValue ( THIS IS A STATE NOT A VARIABLE )
*/

/*
*/

export const InputFieldAndCurrencySelector = ({
    fromTo
}) => {


    // RECOIL CALL
    const [currencyData, setCurrencyData] = useRecoilState(inputCurrencyDataFrom)
    const [targetCurrencyData, setTargetCurrencyData] = useRecoilState(inputCurrencyDataTo);




    // THE CURRENCY SELECTOR ARRAY
    const currencyArray = [
        'AUD', 'BGN', 'BRL', 'CAD', 'CHF',
        'CNY', 'CZK', 'DKK', 'EUR', 'GBP',
        'HKD', 'HRK', 'HUF', 'IDR', 'ILS',
        'INR', 'ISK', 'JPY', 'KRW', 'MXN',
        'MYR', 'NOK', 'NZD', 'PHP', 'PLN',
        'RON', 'RUB', 'SEK', 'SGD', 'THB',
        'TRY', 'USD', 'ZAR'
    ]
    const [currentCurrency, setCurrentCurrency] = useState("USD");










    // TAKING THE CURRENCY TYPE " USD , INR " FROM THE USER
    const currencySelectedFromDropDown = (event) => {
        setCurrentCurrency(() => event.target.value)
        if(fromTo == "To"){
            setTargetCurrencyData(() => event.target.value);
        }else if(fromTo == "From"){
            setCurrencyData(() => event.target.value);
        }
    }


    if(fromTo == "From"){
        console.log("From :",currencyData);
    }else if(fromTo == "To"){
        console.log("To :",targetCurrencyData);
    }











    // TAKING THE CURRENCY VALUE FROM THE USER " 20 , 30 "
    const [userInputCurrencyValue, setUserInputCurrencyValue] = useState(0);



    const currencyInput = (event) => {
        setUserInputCurrencyValue(() => event.target.value);
        

    }



    // console.log("State: ",userInputCurrencyValue);
    // console.log("State: ",currencyData);










    // CHECKING THE VALUE INSIDE OF FROM TO DISABLE OR ENABLE INPUT
    let disableEnableInput = true;
    // console.log(fromTo)
    if (fromTo == "To") {
        disableEnableInput = false;
    }

















    return (
        <div className=" flex justify-center items-center">



            {/* the input box */}
            <div className="flex flex-col mr-3 text-3xl font-league">
                <label htmlFor="currencyInput">{fromTo}</label>

                <input className=" border-2 border-black"
                    id="currencyInput" type="number" min={0}

                    onChange={currencyInput}

                    value={disableEnableInput ? userInputCurrencyValue : targetCurrencyData}

                    disabled={disableEnableInput ? false : true}

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
    fromTo: propTypes.string,
}



