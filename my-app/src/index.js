import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrawBoard from './component/DrawBoard';
import {diamond_pool} from './component/pool';
import bgm from './lottery_get.mp3';
import single_draw from './resource/test_resource/single_draw.png';
import eleven_draw from './resource/test_resource/eleven_draw.png';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            charList: [],
            up: false,
            currentPool:'watergun',
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
        this.setState({charList: randList});
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
                <div className="whole-screen lottery-bgi">
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
                        {/*{   this.state.appear &&*/}
                        {/*<CSSTransitionGroup*/}
                        {/*style={{position: 'absolute', top: '0px'}}*/}
                        {/*transitionName="example"*/}
                        {/*transitionAppear={true}*/}
                        {/*>*/}
                        {/*<img className={'whole-screen'} src={argo} alt={'argo'} onClick={() => this.handleDraw(11)}/>*/}
                        {/*</CSSTransitionGroup>*/}
                        {/*}*/}
                        <div>
                            <div>
                                <img
                                    style={{width:'340px'}}
                                    id="singleDrawBtn"
                                    src={single_draw}
                                    alt={'1'}
                                    onClick={() => this.handleDraw(1)}/>
                            </div>
                            <div>
                                <img
                                    style={{width:'340px'}}
                                    id="elevenDrawBtn"
                                    src={eleven_draw}
                                    alt={'11'}
                                    onClick={() => this.handleDraw(11)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <select value={this.state.currentPool} onChange={this.handlePoolChange}>
                    {createPoolList}
                </select>
                <div className='inline'>
                    <label>
                        UP:
                        <input
                            name="up"
                            type="checkbox"
                            checked={this.state.up}
                            onChange={() => this.handleUp()}/>
                    </label>
                </div>
                <br/>
                <audio controls autoPlay loop>
                    <source src={bgm} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game/>, document.getElementById("root"));
