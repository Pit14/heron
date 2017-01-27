/**
 * Created by Edgar on 27/01/2017.
 */

angular.module("noteApp").controller("MainController",function () {
    var self=this;
    this.message="Yo Pit !";
    this.getMsg=function () {
        return self.message;
    }
});