import React from 'react'

const Data = props => {
    debugger
    let {data} = props
    if (data.length !== 0){
        data.map(d => {
                debugger
                return(<p key={Date.now()}>Input: {JSON.stringify(d.input)}, Output: {d.output === 0 ? 'Dislike': "Like"}</p>) //fix issue here
        })
    } else {
        return(<p>No data Yet</p>)
    }
}

export default Data