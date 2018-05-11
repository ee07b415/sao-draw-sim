import React from 'react';
import '../index.css';
import childfes_asuana from '../resource/childfes_asuna.png';
import childfes_yuki from '../resource/childfes_yuki.png';
import africa_kirito from '../resource/africa_kirito.png';
import africa_clay from '../resource/africa_clay.png'

class DrawBoard extends React.Component {
    state = {

    };

    render() {

        const {
            charList,
            up
        } = this.props;

        const rate = up? 12:6;

        let drawResult = charList.map(character => {
            return (
                <div className = { charList.length === 1 ? "table center-horizontal":"inline center-horizontal"}>
                    {character<= rate && character%2===1 && <img src={childfes_yuki} alt="yuki" className="char-icon" />}
                    {character<= rate && character%2===0 && <img src={childfes_asuana} alt="asuna" className="char-icon" />}
                    {character> rate && character%2===1 && <img src={africa_kirito} alt="kirito"  className="char-icon"/>}
                    {character> rate && character%2===0 && <img src={africa_clay} alt="clay"  className="char-icon"/>}
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