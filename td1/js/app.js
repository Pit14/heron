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