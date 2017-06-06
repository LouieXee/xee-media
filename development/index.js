import './index.less';

import {XeeVideo, XeeAudio} from '../src';

new XeeVideo({
    ele: document.querySelector('.video'),
    img: 'https://tianyu.res.netease.com/pc/zt/20161104095024/img/bg_aa4708d.jpg',
    autoplay: true,
    loop: true
})
