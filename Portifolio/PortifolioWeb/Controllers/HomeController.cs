using Microsoft.AspNetCore.Mvc;

namespace PortifolioWeb.Controllers;

public class HomeController : Controller
{
    public IActionResult Index() => View();
    public IActionResult About() => View();
    public IActionResult Skills() => View();
    public IActionResult Projects() => View();
    public IActionResult Contact() => View();

    public IActionResult CV()
    {
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "docs", "cv.pdf");
        var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        return File(fileStream, "application/pdf");
    }
}