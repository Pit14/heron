/**
 * Created by Edgar on 17/02/2017.
 */

angular.module("contactApp").controller("contactController",function(){

    this.contacts=[
        {
            "nom":"Boy",
            "prenom":"Angular",
            "adresse":"angular.boy@angular.com"
        },
        {
            "nom":"Pit",
            "prenom":"Lama",
            "adresse":"lama@gmail.com"
        },
        {
            "nom":"Tanne",
            "prenom":"Paul",
            "adresse":"tpaulot@gmail.com"
        },
        {
            "nom":"Dragon",
            "prenom":"Wind",
            "adresse":"dw@gmail.com"
        }
    ];
    this.contact="Angular Boy";
    this.tmpContact;
    this.operation;
    this.edit;


    this.toUpdate=function (contact) {

    }

    this.clear=function(){
        this.messageNote="";
        this.info="";
    }

    this.toAdd=function(){

    }

    this.add=function(){

    }


    this.update=function(){

    }


    this.delete=function(contact){

    }


});