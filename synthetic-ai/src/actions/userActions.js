export const signup = (inputs) => {
    let userData = {'users': inputs}
    return (dispatch) => {
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',  
            },
            body: JSON.stringify(userData)
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'SIGNUP', user: data}))
        .catch(error => alert(error.message))
    }
} 

export const login = (inputs) => {
    let userData = {'users': inputs}
    return (dispatch) => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',  
            },
            body: JSON.stringify(userData)
        })
        .then(resp => resp.json())
        .then(data => {
            debugger 
            return dispatch({type: 'LOGIN', user: data})
        })
        .catch(error => alert(error.message))
    }
} 
