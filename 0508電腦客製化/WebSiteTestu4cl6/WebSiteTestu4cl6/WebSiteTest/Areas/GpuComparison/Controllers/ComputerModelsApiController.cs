using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebSiteTest.Areas.GpuComparison.Models;

namespace WebSiteTest.Areas.GpuComparison.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputerModelsApiController : ControllerBase
    {
        private readonly ComperWebSiteContext _context;

        public ComputerModelsApiController(ComperWebSiteContext context)
        {
            _context = context;
        }

        // GET: api/ComputerModelsApi
        [HttpGet]
        public async Task<IEnumerable<CmpModelDTO>> GetComputerModel()
        {
            return _context.ComputerModel.Select(cm => new CmpModelDTO
            {
                ProductsID = cm.ProductsId,
                Value = cm.Value,
            });
        }

        // GET: api/ComputerModelsApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ComputerModel>> GetComputerModel(string id)
        {
          if (_context.ComputerModel == null)
          {
              return NotFound();
          }
            var computerModel = await _context.ComputerModel.FindAsync(id);

            if (computerModel == null)
            {
                return NotFound();
            }

            return computerModel;
        }

        // PUT: api/ComputerModelsApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComputerModel(string id, ComputerModel computerModel)
        {
            if (id != computerModel.ProductsId)
            {
                return BadRequest();
            }

            _context.Entry(computerModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComputerModelExists(id))
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

        // POST: api/ComputerModelsApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ComputerModel>> PostComputerModel(ComputerModel computerModel)
        {
          if (_context.ComputerModel == null)
          {
              return Problem("Entity set 'ComperWebSiteContext.ComputerModel'  is null.");
          }
            _context.ComputerModel.Add(computerModel);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ComputerModelExists(computerModel.ProductsId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetComputerModel", new { id = computerModel.ProductsId }, computerModel);
        }

        // DELETE: api/ComputerModelsApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComputerModel(string id)
        {
            if (_context.ComputerModel == null)
            {
                return NotFound();
            }
            var computerModel = await _context.ComputerModel.FindAsync(id);
            if (computerModel == null)
            {
                return NotFound();
            }

            _context.ComputerModel.Remove(computerModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComputerModelExists(string id)
        {
            return (_context.ComputerModel?.Any(e => e.ProductsId == id)).GetValueOrDefault();
        }
    }
}
