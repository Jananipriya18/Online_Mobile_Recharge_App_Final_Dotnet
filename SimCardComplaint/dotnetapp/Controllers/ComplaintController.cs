using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using dotnetapp.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace dotnetapp.Controllers
{
    public class ComplaintController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ComplaintController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Complaint/Create
        public IActionResult Create()
        {
            // Assuming you have a list of executives available in your application
            var executives = _context.Executives.ToList(); // Fetching the executives from your database

            // Creating a SelectList for the dropdown
            ViewBag.ExecutiveList = new SelectList(executives, "ExecutiveID", "ExecutiveName");

            return View();
        }

        // POST: Complaint/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Complaint complaint)
        {
            if (ModelState.IsValid)
            {
                // Assuming ExecutiveID is obtained from the logged-in executive
                // You might need to adjust this logic based on your authentication mechanism
                var executiveId = 1; // Replace with the actual executive ID

                complaint.ExecutiveID = executiveId; // Assign the executive ID to the complaint
                complaint.Status = "Pending"; // Set default status

                _context.Complaints.Add(complaint);
                _context.SaveChanges();

                return RedirectToAction("Index", "Home"); // Redirect to home page after adding complaint
            }
            return View(complaint);
        }

        public IActionResult Dashboard()
        {
            var complaints = _context.Complaints.Include(c => c.Executive).ToList();
            return View(complaints);
        }
    }
}
