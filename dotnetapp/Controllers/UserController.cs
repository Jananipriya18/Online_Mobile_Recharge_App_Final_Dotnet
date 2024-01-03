using Microsoft.AspNetCore.Mvc;
using dotnetapp.Data;
using dotnetapp.Models;
using System.Linq;

namespace dotnetapp.Controllers
{
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Action method to view user profile
        public IActionResult Profile()
        {
            var user = GetMockUserData(); // Replace with your logic to retrieve user data

            if (user == null)
            {
                return NotFound(); // Handle case where user is not found
            }

            return View(user); // Pass the user object to the Profile view
        }

        // Action method to render the settings view
        public IActionResult Settings()
        {
            var user = GetMockUserData(); // Replace with your logic to retrieve user data

            if (user == null)
            {
                return NotFound(); // Handle case where user is not found
            }

            return View(user); // Pass the user object to the Settings view
        }

        // Action method to handle settings update
        [HttpPost]
        public IActionResult UpdateSettings(User updatedUser)
        {
            var existingUser = _context.Users.FirstOrDefault(u => u.UserId == updatedUser.UserId);

            if (existingUser == null)
            {
                return NotFound(); // Handle case where user is not found
            }

            // Update the user properties with the new values
            existingUser.Username = updatedUser.Username;
            existingUser.Email = updatedUser.Email;
            // Update other user properties as needed

            _context.SaveChanges(); // Save changes to the database

            return RedirectToAction("Profile"); // Redirect to profile after settings update
        }

        // Mocked user data for demonstration purposes (replace with actual data retrieval logic)
        private User GetMockUserData()
        {
            return _context.Users.FirstOrDefault(); // Replace with your logic to retrieve user data
        }
    }
}
