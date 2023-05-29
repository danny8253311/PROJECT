using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OpenAI_API.Completions;
using OpenAI_API;
using System.Diagnostics;
using WebSiteTest.Areas.ThriftShop.Models;
using WebSiteTest.Models;

namespace WebSiteTest.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        ComperWebSiteContext _context;

        public HomeController(ILogger<HomeController> logger, ComperWebSiteContext context)
        {
            _logger = logger;
            _context = context;
        }

        [Authorize(Roles ="Employee")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Index_front()
        {
            return View();
        }
        public IActionResult GPT(string searchText)
        {
            //your OpenAI API key
            string apiKey = "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";
            string answer = string.Empty;
            var openai = new OpenAIAPI(apiKey);
            CompletionRequest completion = new CompletionRequest();
            completion.Prompt = searchText;
            completion.Model = OpenAI_API.Models.Model.DavinciText;
            completion.MaxTokens = 4000;
            var result = openai.Completions.CreateCompletionAsync(completion);
            if (result != null)
            {
                foreach (var item in result.Result.Completions)
                {
                    answer = item.Text;
                }
            }
            ViewBag.Answer = answer;
            ViewBag.Text = searchText;
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult thrift() 
        {
            return View();
        }
        public IActionResult Widgets()
        {
            return View();
        }
		public IActionResult Blog()
		{
			return View();
		}
		public IActionResult Blog_details()
		{
			return View();
		}
		public IActionResult Blog_details2()
		{
			return View();
		}
		public IActionResult Blog_details3()
		{
			return View();
		}
		public IActionResult Blog_details4()
		{
			return View();
		}
		public IActionResult Blog_details5()
		{
			return View();
		}
		public IActionResult Blog_details6()
		{
			return View();
		}
		public IActionResult Blog_details7()
		{
			return View();
		}
		public IActionResult Blog_details8()
		{
			return View();
		}
		public IActionResult Blog_details9()
		{
			return View();
		}
		public IActionResult video()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}