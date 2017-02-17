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
    this.operation="lol";
    this.edit=false;



    this.toUpdate=function (contact) {

    }

    this.toAdd=function(){

    }

    this.add=function(){
        this.operation=$scope.prenom;
       // this.contact.push()

    }


    this.update=function(){

    }


    this.delete=function(contact){

    }

    this.setEdit=function(){
        if(this.edit==false){
            this.edit=true;
        }
        else
            this.edit=false;

    }


});