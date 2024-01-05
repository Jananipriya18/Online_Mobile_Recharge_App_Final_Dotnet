using Microsoft.AspNetCore.Mvc;
using dotnetapp.Data;
using dotnetapp.Models;
using System.Linq;

namespace dotnetapp.Controllers
{
    public class ExecutiveController : Controller
    {
        private readonly ApplicationDbContext _db;

        public ExecutiveController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: /Executive
        public IActionResult Index()
        {
            var executives = _db.Executives.ToList();
            return View(executives);
        }

        // GET: /Executive/Create
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
[ValidateAntiForgeryToken]
public IActionResult Create(Executive newExecutive)
{
    try
    {
        if (ModelState.IsValid)
        {
            _db.Executives.Add(newExecutive);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        Console.Write("Hello");
        return View(newExecutive);
    }
    catch (Exception ex)
    {
        // Log the exception or handle it appropriately
        ModelState.AddModelError("", "An error occurred while creating the executive.");
        return View(newExecutive);
    }
}


        // GET: /Executive/Edit/5
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var executive = _db.Executives.Find(id);
            if (executive == null)
            {
                return NotFound();
            }

            return View(executive);
        }

        // POST: /Executive/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, Executive executive)
        {
            if (id != executive.ExecutiveID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _db.Update(executive);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(executive);
        }

        // GET: /Executive/Delete/5
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var executive = _db.Executives.Find(id);
            if (executive == null)
            {
                return NotFound();
            }

            return View(executive);
        }

        // POST: /Executive/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var executive = _db.Executives.Find(id);
            if (executive == null)
            {
                return NotFound();
            }

            _db.Executives.Remove(executive);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
