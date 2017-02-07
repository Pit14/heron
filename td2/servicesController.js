/**
 * Created by Edgar on 03/02/2017.
 */
angular.module("ServicesApp").controller("ServicesController",["$http",function($http){
    this.services = [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];

    this.selPromo = false;
    this.codePromo="";
    this.reduction=1.00;
    var self=this;

    $http.get("promo.json").then(function(response){
        self.promos=response.data;
        console.log(self.promos['B22']);
    });

    this.servicesActifs = 1;

    this.total = function(){
        var total=0;
        for (var i=0;i<this.services.length;i++){
            if (this.services[i]["active"]==true){
                total += this.services[i]["price"];
            }
        }
        return total;
    };
    this.toggleActive = function(service){
        if(service.active==false) {
            this.servicesActifs += 1;
            service.active=true;
        }
        else{
            this.servicesActifs -= 1;
            service.active=false;
        }
    };

    this.verifierCode= function(){
        console.log(JSON.stringify(self.promos));
        if (this.codePromo.length>0 && self.promos[this.codePromo]){
            this.reduction=1-self.promos[this.codePromo];
        }
        else{
            this.reduction=1;
        }
    };


}]);
