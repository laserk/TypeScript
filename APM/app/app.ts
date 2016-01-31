module app {
    var main = angular.module("productManagement",
    ["ngRoute",
    "common.services",
    "productResourceMock"]);
    
    main.config(routeConfig);
    
    routeConfig.$inject=["$routeProvider"];
    function routeConfig($routeProvider:ng.route.IRouteProvider): void {
        //rule setup
        $routeProvider
        //URL Fragment as rule name
        .when("/productList",
        {
            templateUrl: "/app/products/productListView.html",
            controller:"ProductListCtrl as vm"
        })
        //:productId as parameter
         .when("/productDetail/:productId",
        {
            templateUrl: "/app/products/productDetailView.html",
            controller:"ProductDetailCtrl as vm"
        })
        //default rule
         .otherwise("/productList")   ;    
    }
}