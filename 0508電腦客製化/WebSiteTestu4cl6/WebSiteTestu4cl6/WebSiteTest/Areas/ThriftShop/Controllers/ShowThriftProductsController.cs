using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebSiteTest.Areas.ThriftShop.Models;
using ComperWebSiteContext = WebSiteTest.Areas.ThriftShop.Models.ComperWebSiteContext;

namespace WebSiteTest.Areas.ThriftShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowThriftProductsController : ControllerBase
    {
        private readonly ComperWebSiteContext _context;

        public ShowThriftProductsController(ComperWebSiteContext context)
        {
            _context = context;
        }

        // GET: api/ShowThriftProducts
        [HttpGet]
        public async Task<IEnumerable<ThriftProductsDTO>> GetThriftProducts()
        {
            return _context.ThriftProducts.Select(emp => new ThriftProductsDTO
            {
                ThriftProductId = emp.ThriftProductId,
                ThriftProductName = emp.ThriftProductName,
                ThriftProductUnitPrice = emp.ThriftProductUnitPrice,
                ThriftProductQty = emp.ThriftProductQty,
                ThriftProductCategory = emp.ThriftProductCategory,
                ThriftProductStatus = emp.ThriftProductStatus,
                ThriftPicture = emp.ThriftPicture
            });
        }

        // GET: api/ShowThriftProducts/5
        [HttpGet("{id}")]
        public async Task<ThriftProductsDTO> GetThriftProducts(string id)
        {
          
            var thriftProducts = await _context.ThriftProducts.FindAsync(id);

            return new ThriftProductsDTO
            {
                ThriftProductId = thriftProducts.ThriftProductId,
                ThriftProductName = thriftProducts.ThriftProductName,
                ThriftProductUnitPrice = thriftProducts.ThriftProductUnitPrice,
                ThriftProductQty = thriftProducts.ThriftProductQty,
                ThriftProductCategory = thriftProducts.ThriftProductCategory,
                ThriftProductStatus = thriftProducts.ThriftProductStatus,
                ThriftPicture = thriftProducts.ThriftPicture
            };
        }

        [HttpGet("cart/{Cid}/{Pid}")]
        public async Task<IEnumerable<ThriftShoppingcart>> GetThriftCartProducts(string Cid, string Pid)
        {
            return _context.ThriftShoppingcart.Where(SC => SC.ThriftProductId == Pid && SC.CustomerId == Cid).Select(SC => new ThriftShoppingcart
            {
                CustomerId = SC.CustomerId,
                ThriftProductId = SC.ThriftProductId,
                ThriftProductName = SC.ThriftProductName,
                ThriftProductQty = SC.ThriftProductQty,
                ThriftProductUnitPrice = SC.ThriftProductUnitPrice,
            });
        }
        // GET: api/ShowThriftProducts/cart/5
        [HttpGet("cart/{Cid}")]
        public async Task<IEnumerable<ThriftShoppingcart>> GetThriftCartProducts2(string Cid)
        {
            return _context.ThriftShoppingcart.Where(SC => SC.CustomerId == Cid).Select(SC => new ThriftShoppingcart
            {
                CustomerId = SC.CustomerId,
                ThriftProductId = SC.ThriftProductId,
                ThriftProductName = SC.ThriftProductName,
                ThriftProductQty = SC.ThriftProductQty,
                ThriftProductUnitPrice = SC.ThriftProductUnitPrice,
            });
        }

        
        

        // PUT: api/ShowThriftProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("cart/{Cid}/{Pid}/{Qty}")]
        public async Task<string> PutThriftCartProducts(string Cid, string Pid, int Qty)
        {
            ThriftShoppingcart cart = await _context.ThriftShoppingcart.FindAsync(Cid, Pid);
            if (cart != null)
            { 
                cart.ThriftProductQty = Qty;
                _context.Entry(cart).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    throw;
                }

                return "修改成功";
            }
            else
            {
                return "找不到購物車紀錄";
            }
        }

        // POST: api/ShowThriftProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<string> PostProducts(ThriftShoppingcart thriftshoppingCart)
        {
            ThriftShoppingcart cart = new ThriftShoppingcart
            {
                CustomerId = thriftshoppingCart.CustomerId,
                ThriftProductId = thriftshoppingCart.ThriftProductId,
                ThriftProductName = thriftshoppingCart.ThriftProductName,
                ThriftProductQty = thriftshoppingCart.ThriftProductQty,
                ThriftProductUnitPrice = thriftshoppingCart.ThriftProductUnitPrice,
            };
            _context.ThriftShoppingcart.Add(cart);
            await _context.SaveChangesAsync();
            return "成功加入購物車";
        }

        // DELETE: api/ShowThriftProducts/5
        [HttpDelete("{Productid}/{Customerid}")]
        public async Task<string> DeleteProducts(string Productid, string Customerid)
        {
            //var ID = id.Split('|');
            var ThriftfavoriteProduct = _context.ThriftFavoriteList.Where(pro => pro.ThriftProductId == Productid && pro.CustomerId == Customerid).FirstOrDefault();
            if (ThriftfavoriteProduct == null)
            {
                return "移除失敗";
            }
            _context.ThriftFavoriteList.Remove(ThriftfavoriteProduct);
            await _context.SaveChangesAsync();
            return "移除成功";
        }

        private bool ThriftProductsExists(string id)
        {
            return (_context.ThriftProducts?.Any(e => e.ThriftProductId == id)).GetValueOrDefault();
        }
    }
}
