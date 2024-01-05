using System.Linq;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace dotnetapp.Controllers
{
    public class ComplaintController : Controller
{
    private readonly ApplicationDbContext _db; // Your ApplicationDbContext instance

    public ComplaintController(ApplicationDbContext db)
    {
        _db = db;
    }

    public ActionResult Create()
{
    var executives = _db.Executives
        .Select(e => new SelectListItem
        {
            Value = e.ExecutiveID.ToString(),
            Text = e.ExecutiveName
        })
        .ToList();

    if (executives.Any())
    {
        ViewBag.Executives = executives;
    }
    else
    {
        // Handle the case where no executives are found
        ViewBag.Executives = new List<SelectListItem>();
        // You can set default values or handle this scenario as per your requirement
    }

    return View();
}



    // Action for handling the submission of a new complaint form
    [HttpPost]
    public ActionResult Create(Complaint newComplaint)
    {
        if (ModelState.IsValid)
        {
            // Add the new complaint to the database using _db instance
            _db.Complaints.Add(newComplaint);
            _db.SaveChanges();

            // Redirect to a success page or dashboard after adding the complaint
            return RedirectToAction("Dashboard");
        }

        // If the model state is not valid, return to the add complaint form with errors
        return View(newComplaint);
    }

    // Action for displaying the dashboard with a list of complaints
    public ActionResult Dashboard()
    {
        // Fetch all complaints and pass them to the dashboard view using _db instance
        var complaints = _db.Complaints.ToList();
        return View(complaints);
    }

    // Action for updating the status of a complaint
    [HttpPost]
    public ActionResult UpdateStatus(int complaintId, string newStatus)
    {
        var complaint = _db.Complaints.Find(complaintId);

        if (complaint != null)
        {
            complaint.Status = newStatus;
            _db.SaveChanges();
        }

        // Redirect back to the dashboard after updating the status
        return RedirectToAction("Dashboard");
    }
}
}