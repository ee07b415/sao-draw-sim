import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import childfes from './resource/child_fes.png';
import childfes_asuana from './resource/childfes_asuna.png';
import childfes_yuki from './resource/childfes_yuki.png';
import africa_kirito from './resource/africa_kirito.png';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <img src={childfes} alt="childfes" />
                {/*<div className="board-row">*/}
                    {/*{this.renderSquare(0)}*/}
                    {/*{this.renderSquare(1)}*/}
                    {/*{this.renderSquare(2)}*/}
                {/*</div>*/}
                {/*<div className="board-row">*/}
                    {/*{this.renderSquare(3)}*/}
                    {/*{this.renderSquare(4)}*/}
                    {/*{this.renderSquare(5)}*/}
                {/*</div>*/}
                {/*<div className="board-row">*/}
                    {/*{this.renderSquare(6)}*/}
                    {/*{this.renderSquare(7)}*/}
                    {/*{this.renderSquare(8)}*/}
                {/*</div>*/}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true,
            charList: [],
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    handleDraw = () =>{
        let randList =[];
        for(let i = 0; i < 11; i++){
            randList.push( Math.floor(Math.random()*100));
        }
        randList.sort(function(a, b){return a - b});
        console.log(randList);
        this.setState({charList: randList})
    };

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        let drawResult = this.state.charList.map(character => {
           return (
               <div className="inline">
                   {character<=4 && character%2===1 && <img src={childfes_yuki} />}
                   {character<=4 && character%2===0 && <img src={childfes_asuana} />}
                   {character>4 && <img src={africa_kirito} />}
               </div>
           )
        });

        return (
            <div>
                <div>
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <br/>
                <br/>
                <div>
                    <div>
                        <button className="single-draw"></button>
                        <button className="eleven-draw" onClick={() => this.handleDraw()}></button>
                    </div>
                    <br/>
                    <br/>
                    {this.state.charList.length !== 0 &&
                        drawResult
                    }
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
