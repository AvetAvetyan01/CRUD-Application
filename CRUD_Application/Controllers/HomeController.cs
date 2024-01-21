using CRUD_Application.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CRUD_Application.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        protected readonly ApplicationDbContext _context;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
            { return View(_context.Users.ToList()); }

        [HttpPost]
        public IActionResult Create(string firstname, string lastname, int age, string profession)
        {
            _context.Add(new User { FirstName = firstname, LastName = lastname, Age = age, Profession = profession });

            _context.SaveChanges();

            return RedirectToAction(nameof (Index));
        }

        [HttpPost]
        public IActionResult Update(int id, string firstName, string lastName, int age, string profession)
        {
            if (_context.Users.ToList().Find(e => e.Id == id) is User employee)
            {
                employee.FirstName = firstName;
                employee.LastName = lastName;
                employee.Age = age;
                employee.Profession = profession;

                _context.SaveChanges();
            }

            return RedirectToAction(nameof (Index));
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            if (_context.Users.ToList().Find(e => e.Id == id) is User removableEmployee)
            {
                _context.Users.Remove(removableEmployee!);
                _context.SaveChanges();
            }

            return RedirectToAction(nameof(Index));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
            { return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier }); }
    }
}
