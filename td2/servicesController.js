/**
 * Created by Edgar on 03/02/2017.
 */
angular.module("ServicesApp").controller("ServicesController",function(){
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


});
