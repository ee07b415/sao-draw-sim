import React from 'react';
import '../index.css';
import alice from '../resource/test_resource/alice.png';
import frame from '../resource/test_resource/image_character_background_frame_l_platinum.png';
import star from '../resource/test_resource/star.png';
import new_icon from '../resource/test_resource/new_icon.png';
import char_bgi from '../resource/test_resource/char_bgi.png';
import lv_label from '../resource/test_resource/lv_label.png';
import sword from '../resource/weapon/Sword.png';
import fire from '../resource/attribute/icon_attribute_fire.png';

class CharIcon extends React.Component {
    state = {};

    render() {

        // const {
        //     char
        // } = this.props;

        // const char={
        //     pool:'test_resource',
        //     char:'alice',
        //     attribute:'fire',
        //     weapon:'sword',
        // };

        const starNo = 4;

        return (
            <div>
                <img className="icon-frame" src={frame} alt='frame' />
                <img className="icon-char" src={alice} alt='alice' />
                <img className="icon-bgi" src={char_bgi} alt='char_bgi' />
                <div className="icon-star-block">
                    <img className="star" src={star} alt='star' key="star_1"/>
                    <img className="star" src={star} alt='star' key="star_2"/>
                    {
                        starNo>=3 &&
                        <img className="star" src={star} alt='star' key="star_3"/>
                    }
                    {
                        starNo>=4 &&
                        <img className="star" src={star} alt='star' key="star_4"/>
                    }
                    {
                        starNo>=5 &&
                        <img className="star" src={star} alt='star' key="star_5"/>
                    }
                </div>
                <img className="icon-new-icon" src={new_icon} alt='new_icon' />
                <img className="icon-lv-label" src={lv_label} alt='lv_label' />
                <div className="icon-lv-text">LV&nbsp;&nbsp;&nbsp;1</div>
                <img className="icon-attribute" src={fire} alt='fire' />
                <img className="icon-weapon" src={sword} alt='sword' />
            </div>
        );
    }
}

export default CharIcon