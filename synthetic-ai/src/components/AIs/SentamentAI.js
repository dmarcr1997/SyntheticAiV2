import React, { Component } from 'react';
import { Button, Input, Text } from "@chakra-ui/core";
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
        
        net.train(trainingData, {
            iterations: 200,
            errorThresh: 0.005,
            log: (error) => console.log(error)
        })
    }
    render(){
        return(
            <div>
                <Text fontSize="4xl">SentamentAI</Text>
                <Button onClick={() => this.trainAi()}>Train</Button>
                <Text fontSize="lg">How it feels</Text>
                <Text fontSize="lg">{this.state.output}</Text>
                <br/>
                <Text fontSize="3xl">Enter a new Sentence to Test</Text>
                <form onSubmit={this.outPut}>
                    <Input type='text' onChange={this.changeIn} value={this.state.input}/>
                    <Button><input type='submit'/></Button>
                </form>
            </div>
        )
    }
}
export default SentamentAI
