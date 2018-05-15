import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrawBoard from './component/DrawBoard';
import {diamond_pool} from './component/pool';
import bgm from './bgm.mp3';
import argo from './resource/argo.png';
import {CSSTransitionGroup} from 'react-transition-group';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            charList: [],
            up: false,
            currentPool:'childfes',
            appear: false,
        };
    }

    handleShow = () => {
        this.setState({charList:[]}, () => this.setState({appear:true}));
    };

    handleDraw = (draws) => {
        let randList = [];
        for (let i = 0; i < draws; i++) {
            randList.push(Math.floor(Math.random() * 200));
        }
        randList.sort(function (a, b) {
            return a - b
        });
        this.setState({appear:false}, () => this.setState({charList: randList}));
    };

    handleUp = () => {
        this.setState({up: !this.state.up});
        this.setState({charList: []})
    };

    handleBackground = (pool) => {
        return diamond_pool[pool].dir('./bgi.png', true)
    };

    handlePoolChange = (event) => {
        this.setState({currentPool:event.target.value}, () => this.setState({charList: []}))
    };

    render() {
        let createPoolList = Object.keys(diamond_pool).map(name => {
            return <option value={name} key={name}>{name}</option>
        });

        return (
            <div>
                <select value={this.state.currentPool} onChange={this.handlePoolChange}>
                    {createPoolList}
                </select>
                <div style={{width: "680px"}}>
                    <div style={{
                        width: "680px",
                        height: "760px",
                        backgroundImage: `url(${this.handleBackground(this.state.currentPool)})`
                    }}>
                        {this.state.charList.length !== 0 &&
                        <DrawBoard
                            currentPool={this.state.currentPool}
                            charList={this.state.charList}
                            up={this.state.up}
                        />
                        }
                    </div>
                    {   this.state.appear &&
                    <CSSTransitionGroup
                        style={{position: 'absolute', top: '0px'}}
                        transitionName="example"
                        transitionAppear={true}
                        >
                        <img className={'whole-screen'} src={argo} alt={'argo'} onClick={() => this.handleDraw(11)}/>
                    </CSSTransitionGroup>
                    }
                    <div>
                        <div>
                            <button className="single-draw" onClick={() => this.handleDraw(1)}></button>
                            <button className="eleven-draw" onClick={() => this.handleShow()}></button>
                        </div>
                        <div>
                            <label>
                                UP:
                                <input
                                    name="up"
                                    type="checkbox"
                                    checked={this.state.up}
                                    onChange={() => this.handleUp()}/>
                            </label>
                        </div>
                    </div>
                    <audio controls>
                        <source src={bgm} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game/>, document.getElementById("root"));
