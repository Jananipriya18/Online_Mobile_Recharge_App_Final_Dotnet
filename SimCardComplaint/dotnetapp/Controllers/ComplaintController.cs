using System.Linq;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace dotnetapp.Controllers
{
    public class ComplaintController : Controller
    {
        private readonly ApplicationDbContext _db;

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

            // Always pass the executives to the view, whether it's empty or not
            ViewBag.Executives = executives;

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Complaint newComplaint)
        {
            if (ModelState.IsValid)
            {
                // Fetch the selected executive from the database based on the provided ExecutiveID
                var selectedExecutive = _db.Executives.FirstOrDefault(e => e.ExecutiveID == newComplaint.ExecutiveID);

                if (selectedExecutive != null)
                {
                    // Associate the selected executive with the new complaint
                    newComplaint.Executive = selectedExecutive;
                    // Add the complaint to the database
                    _db.Complaints.Add(newComplaint);
                    _db.SaveChanges();
                    return RedirectToAction("Dashboard");
                }
                else
                {
                    ModelState.AddModelError("", "Selected Executive not found");
                }
            }

            // If the model state is not valid or the executive wasn't found, retrieve executives again and return to the view
            var executives = _db.Executives
                .Select(e => new SelectListItem
                {
                    Value = e.ExecutiveID.ToString(),
                    Text = e.ExecutiveName
                })
                .ToList();

            ViewBag.Executives = executives;
            return View(newComplaint);
        }

        public ActionResult Dashboard()
        {
            var complaints = _db.Complaints.Include(c => c.Executive).ToList();
            return View(complaints);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult UpdateStatus(int complaintId, string newStatus)
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
