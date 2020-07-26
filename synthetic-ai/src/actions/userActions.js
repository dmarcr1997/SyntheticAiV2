const signup = (inputs) => {
    let userData = {'users': inputs}
    return (dispatch) => {
        fetch('http://localhost:3001/users/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',  
            },
            body: JSON.stringify(userData)
        })
        .then(resp => {
            debugger
            return resp.json()
        })
        .then(data => console.log(data))
        .catch(error => alert(error.message))
    }
} 

export default signup