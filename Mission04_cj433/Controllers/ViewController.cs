using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_cj433.Controllers
{
    public class ViewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult FanMail()
        {
            return View();
        }
    }
}
