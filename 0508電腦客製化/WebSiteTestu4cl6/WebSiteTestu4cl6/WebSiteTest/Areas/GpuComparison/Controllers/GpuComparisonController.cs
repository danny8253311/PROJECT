using Microsoft.AspNetCore.Mvc;
using ComperWebSiteContext = WebSiteTest.Areas.GpuComparison.Models.ComperWebSiteContext;

namespace WebSiteTest.Areas.GpuComparison.Controllers
{
    [Area("GpuComparison")]
    public class GpuComparisonController : Controller
    {
        ComperWebSiteContext _context;
        public GpuComparisonController(ComperWebSiteContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();

        }

        public IActionResult _3D_CustomizationSystem()
        {
            return View();

        }


    }
}
