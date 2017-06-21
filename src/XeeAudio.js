import jQuery from 'jquery';
import xeeUtils from 'xee-utils';

import {version} from '../package.json';
import XeeMedia from './XeeMedia';

const $ = jQuery;

class XeeAudio extends XeeMedia {

    constructor (target, opt = {}) {
        if (xeeUtils.isObject(target)) {
            opt = target;
            target = target.ele || target.src;
        }

        super(opt);

        if (xeeUtils.isString(target)) {
            this.$media = $(`<audio src="${target}">`);
            this.__getWrapper__().append(this.$media);
        } else if (Object.prototype.toString.call(target) == '[object HTMLAudioElement]') {
            this.$media = $(target);
        }

        XeeMedia.IS_SUPPORT_MEDIA && this.__init__();
    }

    __getWrapper__ () {
        let $wrapper = $('.myAudio--wrapper');

        if (!$wrapper[0]) {
            $wrapper = $('<div>').addClass('myAudio--wrapper').css({
                display: 'none'
            }).appendTo('body');
        }

        return $wrapper;
    }

}

XeeAudio.IS_SUPPORT_MEDIA = XeeMedia.IS_SUPPORT_MEDIA;
XeeAudio.CAN_PLAY_THROUGH = XeeMedia.CAN_PLAY_THROUGH;
XeeAudio.CAN_PLAY = XeeMedia.CAN_PLAY;
XeeAudio.version = version;

export default XeeAudio;
