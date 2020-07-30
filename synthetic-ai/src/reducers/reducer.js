import rawData from './rawData';
import {getZero, getOne, getTwo, getThree, getFour, getFive, getSix, getSeven, getEight, getNine} from './numData.js';
const Reducer = (
    state = {
        user: '',
        AIdata: {
            p: {
                data: getData()
            },
            sug: '',
            sent: '',
            regcog: {
              numbers: getNumData()
            }
        }
    },
    action
) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.user.data.attributes.username,
            }
        case 'SIGNUP':
            return {
                ...state,
                user: action.user.data.attributes.username,
            }
            return state
        case 'LOGOUT':
            return {
                user: '',
                AIdata: {
                    p: '',
                    sug: '',
                    sent: '',
                    regcog: ''
                }
            }
        default:
            

    }
}

let scaleUp = (step) => {
    return {
        open: step.open / 138,
        high: step.close / 138,
        low: step.low / 138,
        close: step.close / 138
    }
}

let scaleDown = (step) => {
    return {
        open: step.open * 138,
        high: step.close * 138,
        low: step.low * 138,
        close: step.close * 138
    }
}

let getData = user => {
    return rawData.map(scaleDown)
}

let getNumData = () => {
    let nums = [
        { "input": getZero, "output": { "zero": 1 } },
        { "input": getOne, "output": { "one": 1 } },
        { "input": getTwo, "output": { "two": 1 } },
        { "input": getThree, "output": { "three": 1 } },
        { "input": getFour, "output": { "four": 1 } },
        { "input": getFive, "output": { "five": 1 } },
        { "input": getSix, "output": { "six": 1 } },
        { "input": getSeven, "output": { "seven": 1 } },
        { "input": getEight, "output": { "eight": 1 } },
        { "input": getNine, "output": { "nine": 1 } },
    ]
    return nums
}

export default Reducer 