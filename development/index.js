import './index.less';

import {XeeVideo, XeeAudio} from '../src';

let $log = document.querySelector('.log');

let video = new XeeVideo({
    ele: document.querySelector('.video__main'),
    doneTime: XeeVideo.CAN_PLAY_THROUGH
});

video.onEnd(e => {
    log('end!');
});
video.onLoading((current, duration) => {
    log(`${current}, ${duration}`);
})
video.onDone(() => {
    log('done!');
})

document.onclick = function () {
    video.play();
};

function log (msg) {
    let $p = document.createElement('p');

    $p.innerHTML = msg;

    $log.prepend($p);
}
