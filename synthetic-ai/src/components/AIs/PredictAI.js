import React, { Component } from 'react';
import { connect } from 'react-redux';
import brain from 'brain.js';
class PredictAI extends Component{
    state = {
        trainingData: [],
        net: new brain.recurrent.LSTMTimeStep({
            inputSize: 4,
            hiddenLayers: [8, 8],
            outputSize: 4
        }),
    }

    componentDidMount(){
        let scaledData = this.props.data
        this.setState({
            trainingData: [
                scaledData.slice(0, 5),
                scaledData.slice(5, 10),
                scaledData.slice(10, 15),
                scaledData.slice(15, 20), 
            ]
        })
    }

    render(){

        return(
            <div>
                <h5>PredictAI</h5>
                <button onClick={async () => {
                        await this.state.net.train(this.state.trainingData, {
                            learningRate: 0.005,
                            errorThresh: 0.02
                        })
                        alert('Done')
                    }
                }
                >Train</button>
                <button onClick={() => 
                    alert(JSON.stringify(this.state.net.run(this.state.trainingData[0])))
                }>Run</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        data: state.AIdata.p.data
    })
}

export default connect(mapStateToProps)(PredictAI)
