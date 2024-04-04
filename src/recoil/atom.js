
import { atom } from "recoil";

export const inputCurrencyDataFrom = atom({

    key:'inputCurrencyDataFrom',
    default: 'USD',
});


export const inputCurrencyDataTo = atom({

    key:'inputCurrencyDataTo',
    default: 'USD',
});

export const targetCurrencyValueAtom = 
atom({
    key:"targetCurrencyValue",
    default:0
})

export const takingUserInputFromInputCurrencyAtom = atom({
    key:"takingUserInputFromInputCurrency",
    default:0,
})