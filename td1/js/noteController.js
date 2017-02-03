/**
 * Created by Edgar on 27/01/2017.
 */

angular.module("noteApp").controller("mainController",function () {

    this.messageNote="";
    this.info="";
    this.status="";

    this.save=function () {
        this.info="Note sauvegardée";
    }

    this.clear=function(){
        this.messageNote="";
        this.info="";
    }

    this.count=function(){
        var nb= 100-this.messageNote.length;
        if(nb>=50){
            this.status="alert-info";
            //this.info="Note modifié";
        }
        else if(nb<=10){
            this.status="alert-danger";
            //this.info="Note modifié";
        }
        else{
            this.status="alert-warning";
            //this.info="Note modifié";
        }
        return nb;
    }
});