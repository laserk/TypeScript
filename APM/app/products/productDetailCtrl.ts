module app.productDetail{
    interface IProductDetailModule{
        title:string;
        product:app.domain.IProduct;
    }
    interface IProductParams extends
      ng.route.IRouteParamsService{
        productId :number;
    }
    /**
     * productDetialCtrl implements IProduct
     */
    class ProductDetailCtrl implements IProductDetailModule {
        title :string;
        product:app.domain.IProduct;
        
        static $inject=["$routeParams","dataAccessService"]
        constructor(private $routeParams : IProductParams,private dataAccessService :app.common.services.DataAccessService) {
            this.title="Product Detail";
            var productResource =  dataAccessService.getProductResource();
            productResource.get({productId:$routeParams.productId},
                (data:app.domain.IProduct)=>{
                this.product=data;
            });
                
            }

    }
    angular
    .module("productManagement")
    .controller("ProductDetailCtrl"
        ,ProductDetailCtrl);
}