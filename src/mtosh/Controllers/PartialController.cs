using Microsoft.AspNetCore.Mvc;

namespace mtosh.web.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult AboutComponent() => PartialView();

        public IActionResult AppComponent() => PartialView();

        public IActionResult ContactComponent() => PartialView();

        public IActionResult TestComponent() => PartialView();

        public IActionResult IndexComponent() => PartialView();
    }
}
