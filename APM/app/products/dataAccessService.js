var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var DataAccessService = (function () {
                function DataAccessService($resource) {
                    this.$resource = $resource;
                }
                DataAccessService.prototype.getProductResource = function () {
                    return this.$resource("/api/products/:productId");
                };
                DataAccessService.$inject = ["$resource"];
                return DataAccessService;
            })();
            services.DataAccessService = DataAccessService;
            angular
                .module("common.services")
                .service("dataAccessService", DataAccessService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
