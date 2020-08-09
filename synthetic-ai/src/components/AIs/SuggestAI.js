import React, { Component } from 'react';
import brain from 'brain.js';
class SuggestAI extends Component {
    state = {
        net: new brain.NeuralNetwork(),
        data: [],
        newProp: '',
        value: 0
    }

    saveData = (event) => {
        event.preventDefault()
        let {data, newProp, value} = this.state
        let convertVal = parseInt(value)
        data.push({input: { [`${newProp}`]: 1 }, output:[convertVal]})
        this.setState({
            data: data,
            newProp: '',
            value: 0 
        })
    }

    handleChange = (event) => {
        this.setState({
            [`${event.target.name}`]: event.target.value
        })
        console.log(this.state)
    }

    learn = () => {
        let {data, net} = this.state
        if (data.length === 0){
            alert('No Data entered Yet')
        } else {
            net.train(data)
            console.log('Trained')
        }
    }

    render(){
        return(
            <div>
                <h5>SuggestAI</h5>
                <form onSubmit={this.saveData} >
                    <input type='text' name='newProp' onChange={this.handleChange} value={this.state.newInput} />
                    <select onChange={this.handleChange} name='value'>
                        <option value={0} >Dislike</option>
                        <option value={1} >Like</option>
                    </select>
                    <input type='submit'/>
                    <p>Once You Have Entered Data:
                    <button onClick={this.learn}>Train</button></p>
                </form>
            </div>
        )
    }
}
export default SuggestAI
