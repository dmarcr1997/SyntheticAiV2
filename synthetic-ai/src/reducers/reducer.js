const Reducer = (
    state = {
        user: '',
        AIdata: {
            p: '',
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

export default Reducer 