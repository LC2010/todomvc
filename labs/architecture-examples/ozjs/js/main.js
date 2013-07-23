/*global require, define*/
'use strict';

require.config({
    baseUrl: 'bower_components/',
    aliases: {
        'dollar': './dollar/dollar/',
        'momo': './momo/momo/',
        'mo': 'mo/',
        'moui': 'moui/',
        'todomvc': '../js/todomvc/'
    }
});

define('eventmaster', 'eventmaster/eventmaster.js');
define('nerv', 'nerv/nerv.js');
define('soviet', 'soviet/soviet.js');
define('urlkit', 'urlkit/urlkit.js');

define('dollar', [
    'mo/lang/mix',
    'dollar/origin',
    'momo/base'
], function (_, $, momoBase) {
    _.mix(momoBase.Class.prototype, {
        bind: function (ev, handler, elm) {
            $(elm || this.node).bind(ev, handler);
            return this;
        },
        unbind: function (ev, handler, elm) {
            $(elm || this.node).unbind(ev, handler);
            return this;
        },
        trigger: function (e, ev) {
            delete e.layerX;
            delete e.layerY;
            $(e.target).trigger(ev, e);
            return this;
        }
    });
    return $;
});

define('jquery', ['dollar'], function ($) {
    return $;
});

define('mo/lang/es5', [], function () {});

require([
    'todomvc/app'
], function (app) {

    app.init();

});
