(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Edgar on 27/01/2017.
 */

angular.module("noteApp",['ngCookies']);

noteApp.service('browser', [ '$window', function($window) {

    this.get= function() {

        var userAgent = $window.navigator.userAgent;
        var browsers = {
            chrome : /chrome/i,
            safari : /safari/i,
            firefox : /firefox/i,
            ie : /internet explorer|.net/i
        };

        for ( var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
        };
        return 'Navigateur inconnu';
    };

} ]);
},{}]},{},[1]);
