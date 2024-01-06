using System;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Data;
using dotnetapp.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
            return RedirectToAction("Index"); // Redirect to Index action after successful creation
        }
        else
        {
            var errors = ModelState.Values.SelectMany(v => v.Errors);
            // Log or investigate ModelState errors
            foreach (var error in errors)
            {
                Console.WriteLine(error.ErrorMessage);
            }
            return View(newExecutive); // Return the view with errors
        }
    }
    catch (Exception ex)
    {
        // Log the exception or handle it appropriately
        ModelState.AddModelError("", "An error occurred while creating the executive.");
        return View(newExecutive);
    }
}
        [HttpGet]
public IActionResult Edit(int id)
{
    var executive = _db.Executives.Include(e => e.Complaints).FirstOrDefault(e => e.ExecutiveID == id);
    if (executive == null)
    {
        return NotFound();
    }

    // Fetch all available complaints and assign them to ViewBag.AllComplaints
    var allComplaints = _db.Complaints.ToList(); // Fetch all complaints from the database or any other source
    ViewBag.AllComplaints = allComplaints;
    

    return View(executive);
}




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
        try
        {
            _db.Update(executive);
            _db.SaveChanges();
            return RedirectToAction("Index"); // Redirect to Index action after successful edit
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ExecutiveExists(executive.ExecutiveID))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
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

        private bool ExecutiveExists(int id)
        {
            return _db.Executives.Any(e => e.ExecutiveID == id);
        }
    }
}