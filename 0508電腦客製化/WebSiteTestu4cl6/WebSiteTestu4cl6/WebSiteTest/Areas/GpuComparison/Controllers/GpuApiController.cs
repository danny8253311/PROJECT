using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebSiteTest.Areas.GpuComparison.DTO;
using WebSiteTest.Areas.GpuComparison.Models;
using WebSiteTest.Areas.ProductsManager.Models;


namespace WebSiteTest.Areas.GpuComparison.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GpuApiController : ControllerBase
    {
        private readonly WebSiteTest.Areas.GpuComparison.Models.ComperWebSiteContext _context;
        public GpuApiController(GpuComparison.Models.ComperWebSiteContext context)
        {
            _context = context;
        }

        // GET: api/GpuApi
        [HttpGet]
        public async Task<IEnumerable<GpuDTO>> GetGpuComparisonSystem()
        {

            return _context.GpuComparisonSystem.Select(gcs => new GpuDTO
            {
                ProductsID = gcs.ProductsId,
                _4K_mark = gcs._4kMark,
                FHD_mark = gcs.FhdMark,
                BASE_mark = gcs.BaseMark,
                FFXIV_mark = gcs.FfxivMark,
                Temperature = gcs.Temperature,
                Price = gcs.Price,
                Img = gcs.Img,            
            });
        }
        // GET: api/GpuApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GpuComparisonSystem>> GetGpuComparisonSystem(string id)
        {
          if (_context.GpuComparisonSystem == null)
          {
              return NotFound();
          }
            var gpuComparisonSystem = await _context.GpuComparisonSystem.FindAsync(id);

            if (gpuComparisonSystem == null)
            {
                return NotFound();
            }

            return gpuComparisonSystem;
        }

        // POST: api/GpuApi/Filter
        //[HttpPost("Filter")]
        //public async Task<IEnumerable<GpuDTO>> FilterGpuComparisonSystem([FromBody] GpuDTO gpuDTO)
        //{
        //    return _context.GpuComparisonSystem.Where(
        //        gcs => gcs.ProductsId == gpuDTO.ProductsID &&
        //               gcs._4kMark == gpuDTO._4K_mark &&
        //               gcs.FhdMark == gpuDTO.FHD_mark &&
        //               gcs.BaseMark == gpuDTO.BASE_mark &&
        //               gcs.FfxivMark == gpuDTO.FFXIV_mark &&
        //               gcs.Temperature == gpuDTO.Temperature &&
        //               gcs.Price == gpuDTO.Price &&
        //               gcs.Img == gpuDTO.Img).Select(gcs => new GpuDTO
        //               {
        //                   ProductsID = gcs.ProductsId,
        //                   _4K_mark = gcs._4kMark,
        //                   FHD_mark = gcs.FhdMark,
        //                   BASE_mark = gcs.BaseMark,
        //                   FFXIV_mark = gcs.FfxivMark,
        //                   Temperature = gcs.Temperature,
        //                   Img = gcs.Img
        //               });                               
        //}
        // PUT: api/GpuApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGpuComparisonSystem(string id, GpuComparisonSystem gpuComparisonSystem)
        {
            if (id != gpuComparisonSystem.ProductsId)
            {
                return BadRequest();
            }

            _context.Entry(gpuComparisonSystem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GpuComparisonSystemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/GpuApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GpuComparisonSystem>> PostGpuComparisonSystem(GpuComparisonSystem gpuComparisonSystem)
        {
          if (_context.GpuComparisonSystem == null)
          {
              return Problem("Entity set 'ComperWebSiteContext.GpuComparisonSystem'  is null.");
          }
            _context.GpuComparisonSystem.Add(gpuComparisonSystem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GpuComparisonSystemExists(gpuComparisonSystem.ProductsId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGpuComparisonSystem", new { id = gpuComparisonSystem.ProductsId }, gpuComparisonSystem);
        }

        // DELETE: api/GpuApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGpuComparisonSystem(string id)
        {
            if (_context.GpuComparisonSystem == null)
            {
                return NotFound();
            }
            var gpuComparisonSystem = await _context.GpuComparisonSystem.FindAsync(id);
            if (gpuComparisonSystem == null)
            {
                return NotFound();
            }

            _context.GpuComparisonSystem.Remove(gpuComparisonSystem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GpuComparisonSystemExists(string id)
        {
            return (_context.GpuComparisonSystem?.Any(e => e.ProductsId == id)).GetValueOrDefault();
        }
    }
}
