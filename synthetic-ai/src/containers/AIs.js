import React, {Component} from 'react';
import PredictAI from '../components/AIs/PredictAI';
import RecognizeAI from '../components/AIs/RecognizeAI';
import SentamentAI from '../components/AIs/SentamentAI';
import SuggestAI from '../components/AIs/SuggestAI';
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
                <h4>AI</h4>
                {this.renderAI(this.state.ai)}
                <button onClick={() => this.changeAi('Recognize')}>Recognize</button>
                <button onClick={() => this.changeAi('Sentament')}>Sentament</button>
                <button onClick={() => this.changeAi('Suggest')}>Suggest</button>
                <button onClick={() => this.changeAi('Predict')}>Predict</button>
                
            </div>
        )
    }
}

export default AIs