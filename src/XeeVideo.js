import jQuery from 'jquery';
import xeeUtils from 'xee-utils';

import {version} from '../package.json';
import XeeMedia from './XeeMedia';

const $ = jQuery;

$('head').append($(`
    <style type="text/css">
        .video__wrapper {
            position: relative;
        }
        .video__main {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        .video__img{
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 1;
            filter: alpha(opacity=100);
            transition: all .8s ease-in-out;
        }
        .video--show .video__img{
            opacity: 0;
            filter: alpha(opacity=0);
        }
    </style>
`))

class XeeVideo extends XeeMedia {

    constructor (target, opt = {}) {
        if (xeeUtils.isObject(target)) {
            opt = target;
            target = target.ele || target.src;
        }

        super(opt);

        if (xeeUtils.isString(target)) {
            this.$media = $(`<video src="${target}">`);
        } else if (Object.prototype.toString.call(target) == '[object HTMLVideoElement]') {
            this.$media = $(target);
            opt.img && this.__appendImg__(opt.img);
        }

        if (XeeMedia.IS_SUPPORT_MEDIA) {
            this.__init__();
            this.onDone(() => {
                this.$wrapper && this.$wrapper.addClass('video--show'); 
            })
        }
    }

    __appendImg__ (img) {
        let media = this.$media[0];
        let className = media.className;

        if (!XeeMedia.IS_SUPPORT_MEDIA) {
            $(`<img class="${className}" src="${img}">`).insertAfter(this.$media);
            this.$media.remove();

            return false;
        }

        media.className = '';
        this.$wrapper = $(`<div class="video__wrapper ${className}">`);
        this.$wrapper.insertAfter(this.$media);
        this.$media.remove();
        this.$wrapper.append(this.$media.addClass('video__main'));
        this.$wrapper.append($(`<img class="video__img" src="${img}">`));
    }

}

XeeVideo.IS_SUPPORT_MEDIA = XeeMedia.IS_SUPPORT_MEDIA;
XeeVideo.CAN_PLAY_THROUGH = XeeMedia.CAN_PLAY_THROUGH;
XeeVideo.CAN_PLAY = XeeMedia.CAN_PLAY;
XeeVideo.version = version;

export default XeeVideo;
