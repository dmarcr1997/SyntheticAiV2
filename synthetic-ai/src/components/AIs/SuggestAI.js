import React, { Component } from 'react';
import brain from 'brain.js';
import Data from '../Data.js'
import { Button, Input, Text, Checkbox, CheckboxGroup } from "@chakra-ui/core";
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
        event.target.getElementsByClassName('box')[0].checked=false
        event.target.getElementsByClassName('box')[1].checked=false
        let {data, newProp, value} = this.state
        debugger
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
        
            alert(net.run(inquery) < 0.5 ? `You Dont Like This score: ${net.run(inquery)}`: `You like this score: ${net.run(inquery)}`)
            this.setState({
                inquery: ''
            })
        }
    }

    showData = () => {
        let datStr = this.state.data.map(d => {
            return `Input: ${JSON.stringify(d.input)}, Output: ${d.output[0] === "0" ? 'Dislike': "Like"}\n`
        })
        alert(datStr)
    }

    render(){
        return(
            <div>
                <Text fontSize='4xl'>SuggestAI</Text>
                <form onSubmit={this.saveData} >
                    <Input type='text' name='newProp' onChange={this.handleChange} value={this.state.newProp} />
                    <Text fontSize='lg'>
                        <Checkbox className='box' type='checkbox' onClick={this.handleChange} name='value' value={0}>Dislike</Checkbox>
                        <Checkbox className='box' type='checkbox' onClick={this.handleChange} name='value' value={1}>Like</Checkbox>
                    </Text>
                    <Button><input type='submit'/></Button>
                </form>
                <Text fontSize='4xl'>Once You Have Entered Data:
                <Button onClick={this.learn}>Train</Button></Text>
                <Input type='text' name='inquery' value={this.state.inquery} onChange={this.handleChange}/>
                <Button onClick={this.suggest}>Do I Like This?</Button>
                <Button onClick={() => this.showData()}>Data</Button>
            </div>
        )
    }
}
export default SuggestAI
