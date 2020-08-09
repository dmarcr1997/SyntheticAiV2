import React, { Component } from 'react';
import brain from 'brain.js';

class SuggestAI extends Component {
    state = {
        net: new brain.NeuralNetwork(),
        data: [],
        newProp: '',
        value: 0,
        inquery: ''
    }

    saveData = (event) => {
        event.preventDefault()
        let {data, newProp, value} = this.state
        
        data.push({input: { [`${newProp}`]: 1 }, output:[value]})
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

    suggest = () => {
        let {inquery, net} = this.state
        if (inquery !== ''){
        
            alert(net.run(inquery))
            this.setState({
                inquery: ''
            })
        }
    }

    renderData = () => {
        let {data} = this.state
        if (data.length === 0){
            return 'No Data Yet\nAdd Some Above'
        }
        return(
            <p>
                {data.map(d => {
                    debugger
                    return(<p key={Date.now()}>Input: {d.input}, Output: {d.output === 0 ? 'Dislike': "Like"}</p>) //fix issue here
                })}
            </p>
        )
    }

    render(){
        return(
            <div>
                <h5>SuggestAI</h5>
                <form onSubmit={this.saveData} >
                    <input type='text' name='newProp' onChange={this.handleChange} value={this.state.newProp} />
                    <select onChange={this.handleChange} name='value'>
                        <option value={0} >Dislike</option>
                        <option value={1} >Like</option>
                    </select>
                    <input type='submit'/>
                    <p>Once You Have Entered Data:
                    <button onClick={this.learn}>Train</button></p>
                    <input type='text' name='inquery' value={this.state.inquery} onChange={this.handleChange}/>
                    <button onClick={this.suggest}>Do I Like This?</button>
                </form>
                {this.renderData()}
            </div>
        )
    }
}
export default SuggestAI
