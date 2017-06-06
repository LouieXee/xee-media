import './index.less';

import {XeeVideo, XeeAudio} from '../src';

new XeeVideo({
    ele: document.querySelector('.video'),
    img: 'https://test.nie.163.com/test_cdn/tianyu/pc/zt/20170602190225/bg_f44f254.jpg',
    autoplay: true,
    loop: true
})
