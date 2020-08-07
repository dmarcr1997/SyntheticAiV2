import React, { Component } from 'react';
import brain from 'brain.js';
class SentamentAI extends Component{
    state = {
        input: "",
        output: "",
        trainingData: [
            { input: " ", output: "There's nothing there"},
            { input: "I am super happy", output: "happy" },
            { input: "This is awsome", output: "happy"},
            { input: "I am having a great day", output: "happy"},
            { input: "Are we there yet", output: "excited" },
            { input: "What a pill", output: "sarcastic" },
            { input: "I am super unhappy", output: "sad" },
            { input: "This is the worst", output: "sad"},
            { input: "Today Sucked", output: "angry"},
            { input: "Why", output: "angry"},
            { input: "I will have revenge", output: "angry"}       
        ],
        net: new brain.recurrent.LSTM(),
    }
    changeIn = (event) =>{
        this.setState({
            input: event.target.value
        })
    }
    outPut = (event) =>{
        event.preventDefault()
        let feel = this.state.net.run(this.state.input)
        this.setState({
            output: feel,
            input: ""
        })
    }
    trainAi = () => {
        let {net, trainingData} = this.state
        debugger
        net.train(trainingData, {
            iterations: 200,
            errorThresh: 0.005,
            log: (error) => console.log(error)
        })
    }
    render(){
        return(
            <div>
                <h5>SentamentAI</h5>
                <button onClick={() => this.trainAi()}>Train</button>
                <h6>How it feels</h6>
                <p>{this.state.output}</p>
                <br/>
                <h6>Enter a new Sentence to Test</h6>
                <form onSubmit={this.outPut}>
                    <input type='text' onChange={this.changeIn} value={this.state.input}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default SentamentAI
