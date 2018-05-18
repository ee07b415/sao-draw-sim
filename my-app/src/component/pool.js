// const weapon =['Bow', 'Dagger', 'DualBlades', 'Gun', 'Lance', 'Mace', 'Rapier', 'Rifle', 'Rod', 'Shield', 'Sword'];
// const attribute =['dark', 'earth', 'fire', 'light', 'unattributed', 'water', 'wind'];

export const diamond_pool = {
    watergun:{
        dir:require.context('../resource/watergun/', true),
        char:['./llenn.png', './pitohui.png', './fukaziroh.png']
    },
    childfes:{
        dir:require.context('../resource/childfes/', true),
        char:['./asuna.png', './yuuki.png']
    },
    trap:{
        dir:require.context('../resource/trap/', true),
        char:['./asuna.png', './kirito.png', './sinon.png', './leafa.png']
    },
};

export const const_pool = {
    twoStar:{
        dir:require.context('../resource/twoStar/', true),
        char:['./kirito.png', './clay.png', './igil.png', './liz.png', './silica.png', './asuna.png']
    },
    threeStar:{
        dir:require.context('../resource/threeStar/', true),
        char:['./kirito.png', './clay.png', './asuna.png', './leafa.png', './silica.png', './sinon.png', './liz.png']
    },
    fourStar:{
        dir:require.context('../resource/fourStar/', true),
        char:['./silica.png', './sinon.png', './leafa.png', './yuuki.png', './rain.png']
    },

};