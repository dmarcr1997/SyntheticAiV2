import rawData from './rawData';
const Reducer = (
    state = {
        user: '',
        AIdata: {
            p: {
                data: getData()
            },
            sug: '',
            sent: '',
            regcog: ''
        }
    },
    action
) => {
    switch(action.type){
        case 'LOGIN':
            state = {
                ...state,
                user: action.user.data.attributes.username,
            }
            return state
        case 'SIGNUP':
            state = {
                ...state,
                user: action.user.data.attributes.username,
            }
            return state
        case 'LOGOUT':
            state = {
                user: '',
                AIdata: {
                    p: '',
                    sug: '',
                    sent: '',
                    regcog: ''
                }
            }
            return state
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

export default Reducer 