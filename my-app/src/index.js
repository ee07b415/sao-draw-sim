import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import childfes from './resource/child_fes.png';
import DrawBoard from './component/DrawBoard';
import bgm from './bgm.mp3';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: [],
            up:false
        };
    }

    handleDraw = (draws) =>{
        let randList =[];
        for(let i = 0; i < draws; i++){
            randList.push( Math.floor(Math.random()*200));
        }
        randList.sort(function(a, b){return a - b});
        this.setState({charList: randList})
    };

    handleUp = () => {
      this.setState({up:!this.state.up});
      this.setState({charList: []})
    };

    render() {
        return (
            <div style={{width:"680px"}}>
                <div style={{width:"680px",
                    height:"760px",
                    backgroundImage:`url(${childfes})`}}>
                    {this.state.charList.length !== 0 &&
                    <DrawBoard
                        charList={this.state.charList}
                        up={this.state.up}
                    />
                    }
                </div>
                <div>
                    <div>
                        <button className="single-draw" onClick={() => this.handleDraw(1)} ></button>
                        <button className="eleven-draw" onClick={() => this.handleDraw(11)}></button>
                    </div>
                    <div>
                        <label>
                            UP:
                            <input
                                name="up"
                                type="checkbox"
                                checked={this.state.up}
                                onChange={() => this.handleUp()} />
                        </label>
                    </div>
                </div>
                <audio controls>
                    <source src={bgm} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
