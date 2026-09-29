using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Paracleto01.Models;

namespace Paracleto01.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult IndexP()
        {
            return View();
        }

        public IActionResult IndexA()
        {
            return View();
        }
        public IActionResult Admin()
        {
            return View();
        }
        public IActionResult AdmAluno()
        {
            return View();
        }
        public IActionResult AdmProf()
        {
            return View();
        }
        public IActionResult AdmPropina()
        {
            return View();
        }
        public IActionResult AddAluno()
        {
            return View();
        }
        public IActionResult AddProf()
        {
            return View();
        }
        public IActionResult AddPropina()
        {
            return View();
        }
        public IActionResult Escolha()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult AdmEmonu()
        {
            return View();
        }
        public IActionResult AddEmonu()
        {
            return View();
        }
        public IActionResult LanEmonu()
        {
            return View();
        }
        public IActionResult AdmCalen()
        {
            return View();
        }
        public IActionResult AddCalen()
        {
            return View();
        }
        public IActionResult AdmComu()
        {
            return View();
        }
        public IActionResult AddComu()
        {
            return View();
        }
        public IActionResult AdmReun()
        {
            return View();
        }
        public IActionResult AddReun()
        {
            return View();
        }
        public IActionResult AdmInsti()
        {
            return View();
        }
        public IActionResult AddInsti()
        {
            return View();
        }
        public IActionResult ProTurma()
        {
            return View();
        }
        public IActionResult ProNota()
        {
            return View();
        }
        public IActionResult ProHorario()
        {
            return View();
        }
        public IActionResult AluReun()
        {
            return View();
        }
        public IActionResult AluProp()
        {
            return View();
        }
        public IActionResult AluNota()
        {
            return View();
        }
        public IActionResult Inscricao()
        {
            return View();
        }
        public IActionResult Matricula()
        {
            return View();
        }
        public IActionResult Privacy()
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
