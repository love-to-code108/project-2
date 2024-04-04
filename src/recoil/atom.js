
import { atom } from "recoil";

export const inputCurrencyData = atom({

    key:'inputCurrencyData',
    default: {
        fromTo:"From",
        inputCurrency:0,
        targetCurrency:0,
    },
});