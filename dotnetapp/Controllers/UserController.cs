using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    public class UserController : Controller
    {
        // Mocked user data for demonstration purposes (replace with actual data retrieval logic)
        private User GetMockUserData()
        {
            return new User
            {
                UserId = 1,
                Username = "exampleuser",
                Email = "user@example.com"
                // Add more properties as per your User model
            };
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
            // Logic to update user settings in your database
            // The 'updatedUser' parameter contains the modified user data from the form

            // For demonstration, redirect to profile after settings update
            return RedirectToAction("Profile");
        }
    }
}
