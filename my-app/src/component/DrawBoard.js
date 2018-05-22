import React from 'react';
import '../index.css';
// import CharIcon from './char_icon';
import {
    const_pool,
    diamond_pool,
} from './pool'

class DrawBoard extends React.Component {
    state = {

    };

    getTwoStarPool = () => {
        return const_pool.twoStar.char.map(name => {
            return (<img className='char-icon' src={const_pool.twoStar.dir(name, true)} alt={name} />)
        });
    };
    // getThreeStarPool = () => {
    //     return const_pool.threeStar.char.map(name => <img className='char-icon' src={const_pool.twoStar.dir(name, true)} alt={name} />);
    // };
    getFourStarPool = () => {
        return const_pool.fourStar.char.map(name => <img className='char-icon' src={const_pool.fourStar.dir(name, true)} alt={name} />);
    };


    getPool = (pool) => {
        return diamond_pool[pool].char.map( name => {
            return (<img className='char-icon' src={diamond_pool[pool].dir(name, true)} alt={name} />)
        });
    };

    handleCharGen = (character, currentPool, up) => {
        let rate = up? 2 * diamond_pool[currentPool].rate:diamond_pool[currentPool].rate;

        if(character<=rate){
            let random = Math.floor(Math.random()* this.getPool(currentPool).length);
            return(this.getPool(currentPool)[random]);
        }else if (character>rate && character<=rate+8){
            let rand = Math.floor(Math.random()* this.getFourStarPool().length);
            return(this.getFourStarPool()[rand]);
        }else{
            let rand = Math.floor(Math.random()* this.getTwoStarPool().length);
            return(this.getTwoStarPool()[rand]);
        }
    };

    render() {

        const {
            currentPool,
            charList,
            up,
        } = this.props;

        let drawResult = charList.map(character => {
            return (
                <div className = { charList.length === 1 ? "table center-horizontal":"inline center-horizontal"}>
                    {this.handleCharGen(character, currentPool, up)}
                </div>
            )
        });

        return (
            <div className="draw-box center">
                {drawResult}
            </div>
        );
    }
}

export default DrawBoard