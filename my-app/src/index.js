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
            guarantee:false,
            currentPool:'fifthanv',
            appear: false,
        };
    }

    handleShow = () => {
        this.setState({charList:[]}, () => this.setState({appear:true}));
    };

    handleDraw = (draws) => {
        let randList = this.state.guarantee? [0]:[];
        for (let i = 0; i < draws - this.state.guarantee? 1:0; i++) {
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

    handleGuarantee = () => {
        this.setState({guarantee: !this.state.guarantee});
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
                    <div style={{
                        width: "680px",
                        height: "760px",
                        backgroundImage: `url(${this.handleBackground(this.state.currentPool)})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"680px 760px"
                    }}>
                        {this.state.charList.length !== 0 &&
                        <DrawBoard
                            currentPool={this.state.currentPool}
                            charList={this.state.charList}
                            up={this.state.up}
                        />
                        }
                    </div>
                    <div className="button-row">
                        <img
                            id="singleDrawBtn"
                            src={single_draw}
                            alt={'1'}
                            onClick={() => this.handleDraw(1)}/>
                        <img
                            id="elevenDrawBtn"
                            src={eleven_draw}
                            alt={'11'}
                            onClick={() => this.handleDraw(11)}/>
                    </div>
                    {/*<div style={{width: "680px"}}>*/}
                        {/*{   this.state.appear &&*/}
                        {/*<CSSTransitionGroup*/}
                        {/*style={{position: 'absolute', top: '0px'}}*/}
                        {/*transitionName="example"*/}
                        {/*transitionAppear={true}*/}
                        {/*>*/}
                        {/*<img className={'whole-screen'} src={argo} alt={'argo'} onClick={() => this.handleDraw(11)}/>*/}
                        {/*</CSSTransitionGroup>*/}
                        {/*}*/}
                    {/*</div>*/}
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
                <div className='inline'>
                    <label>
                        Guarantee:
                        <input
                            name="guarantee"
                            type="checkbox"
                            checked={this.state.guarantee}
                            onChange={() => this.handleGuarantee()}/>
                    </label>
                </div>
                <br/>
                <audio controls loop>
                    <source src={bgm} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game/>, document.getElementById("root"));
