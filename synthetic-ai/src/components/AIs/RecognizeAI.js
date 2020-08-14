import React, { Component } from 'react';
import brain from 'brain.js';
import { connect } from 'react-redux';
import { toArray } from '../../reducers/numData';
import { Button, Textarea, Text } from "@chakra-ui/core";

class RecognizeAI extends Component{
    state = {
        net: new brain.NeuralNetwork(),
        data: ' '
    }

    componentDidMount(){ 

    }
    
    handleChange = event => {
        this.setState({
            data: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault()
        let num = this.state.data.split('\n')
        const result = brain.likely(toArray(
            num[0] +
            num[1] +
            num[2] +
            num[3] +
            num[4] +
            num[5] +
            num[6]   
        ), this.state.net)
        alert(result);
    }



    render(){ 
        return(
            <div>
                <Text fontSize='4xl'>RecognizeAI</Text>
                <Button onClick={async () => 
                    {
                        this.state.net.train(this.props.numbers);
                        alert('DONE');
                    }
                }>Train</Button>
                <Text fontSize='lg'>Input a 7x7 grid of hashes to see if the brain can recoginze your number:</Text>
                <form onSubmit={this.handleSubmit}>
                    <Textarea name='data' value={this.state.data} onChange={this.handleChange} />
                    <Button><input type='submit'/></Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
        numbers: state.AIdata.regcog.numbers
    })
}
export default connect(mapStateToProps)(RecognizeAI)
