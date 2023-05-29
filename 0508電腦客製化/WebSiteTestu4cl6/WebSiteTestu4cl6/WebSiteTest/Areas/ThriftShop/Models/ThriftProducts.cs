﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace WebSiteTest.Areas.ThriftShop.Models
{
    public partial class ThriftProducts
    {
        public ThriftProducts()
        {
            ThriftShopOrderDetail = new HashSet<ThriftShopOrderDetail>();
        }

        public string ThriftProductId { get; set; }
        public string ThriftProductName { get; set; }
        public int ThriftProductUnitPrice { get; set; }
        public int ThriftProductQty { get; set; }
        public string ThriftProductCategory { get; set; }
        public string ThriftProductSupplierId { get; set; }
        public string ThriftProductStatus { get; set; }
        public DateTime ThriftProductOnDate { get; set; }
        public DateTime ThriftProductOffDate { get; set; }
        public string ThriftPicture { get; set; }

        public virtual ICollection<ThriftShopOrderDetail> ThriftShopOrderDetail { get; set; }
    }
}