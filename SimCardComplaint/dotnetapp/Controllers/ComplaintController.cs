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
        public ActionResult Create(Complaint newComplaint)
        {
            if (ModelState.IsValid)
            {
                _db.Complaints.Add(newComplaint);
                _db.SaveChanges();
                return RedirectToAction("Dashboard");
            }

            // If the model state is not valid, retrieve executives again and return to the view
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
            var complaints = _db.Complaints.ToList();
            return View(complaints);
        }

        [HttpPost]
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
