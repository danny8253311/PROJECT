﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace WebSiteTest.Areas.ThriftShop.Models
{
    public partial class ThriftPurchase
    {
        public string CustomerId { get; set; }
        public string ThriftPurchaseId { get; set; }
        public DateTime ThriftPurchaseDate { get; set; }
        public string EmployeeId { get; set; }
        public bool ThriftPurchaseState { get; set; }

        public virtual ThriftPurchaseDetail ThriftPurchaseDetail { get; set; }
    }
}