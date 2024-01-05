using System.Linq;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic; // Ensure to include this namespace for List<SelectListItem>

namespace dotnetapp.Controllers
{
    public class ComplaintController : Controller
{
    private readonly YourDbContext _db;

    public ComplaintController(YourDbContext db)
    {
        _db = db;
    }

    public IActionResult AddComplaint()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddComplaint(Complaint newComplaint)
    {
        if (ModelState.IsValid)
        {
            _db.Complaints.Add(newComplaint);
            _db.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        return View(newComplaint);
    }

    public IActionResult Dashboard()
    {
        var complaints = _db.Complaints.Include(c => c.Executive).ToList();
        return View(complaints);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateStatus(int complaintId, string newStatus)
    {
        var complaint = _db.Complaints.Find(complaintId);

        if (complaint != null)
        {
            complaint.Status = newStatus;
            _db.SaveChanges();
        }

        return RedirectToAction("Dashboard");
    }
}

}
