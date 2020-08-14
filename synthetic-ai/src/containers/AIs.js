import React, {Component} from 'react';
import PredictAI from '../components/AIs/PredictAI';
import RecognizeAI from '../components/AIs/RecognizeAI';
import SentamentAI from '../components/AIs/SentamentAI';
import SuggestAI from '../components/AIs/SuggestAI';
import { Button, Text } from "@chakra-ui/core";
class AIs extends Component{
    state ={
        ai: "Predict"
    }
    renderAI = (type) =>{
        switch(type){
            case "Predict":
                return <PredictAI/>
            case "Recognize":
                return <RecognizeAI/>
            case "Sentament":
                return <SentamentAI/>
            case "Suggest":
                return <SuggestAI/>
            default:
                return
        }
    }
    changeAi = (type) => {
        this.setState({
            ai: type
        })
    }
    render(){
        return(
            <div>
                <Text fontSize="5xl">AI</Text>
                {this.renderAI(this.state.ai)}
                <Button onClick={() => this.changeAi('Recognize')}>Recognize</Button>
                <Button onClick={() => this.changeAi('Sentament')}>Sentament</Button>
                <Button onClick={() => this.changeAi('Suggest')}>Suggest</Button>
                <Button onClick={() => this.changeAi('Predict')}>Predict</Button>
                
            </div>
        )
    }
}

export default AIs