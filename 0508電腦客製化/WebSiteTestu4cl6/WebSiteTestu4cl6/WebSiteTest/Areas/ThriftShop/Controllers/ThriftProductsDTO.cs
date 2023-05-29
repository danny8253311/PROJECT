namespace WebSiteTest.Areas.ThriftShop.Controllers
{
    public class ThriftProductsDTO
    {
        public string ThriftProductId { get; set; }
        public string ThriftProductName { get; set; }
        public int ThriftProductUnitPrice { get; set; }
        public int ThriftProductQty { get; set; }
        public string ThriftProductCategory { get; set; }
        public string ThriftProductStatus { get; set; }
        public string ThriftPicture { get; set; }
    }
}