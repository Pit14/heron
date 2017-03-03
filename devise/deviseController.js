/**
 * Created by Edgar on 03/03/2017.
 */

angular.module('deviseApp',[]).controller("deviseController",['$http', '$sce', function($http, $sce){

    var self = this;
    this.currencies;
    this.from = "EUR";
    this.to = "USD";
    this.what = 1;
    this.result;
    this.historique = false;

    $http.get('app/data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
        },
        function(response) {
            console.log("Erreur http : "+response.status);
        });


    this.swap = function (){
        var tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    };

    this.getResult = function(){
        url = $sce.trustAsResourceUrl('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to);
        $http.jsonp(url, {jsonCallbackParam : 'callback'}).then(function(result)
        {
            if(!jQuery.isEmptyObject(result.data)){
                self.result = result.data[self.from+'_'+self.to].val*self.what;
            }
            else {
                alert('Erreur de conversion');
            }
        });
    };

}]);