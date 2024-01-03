using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using System.Collections.Generic;

namespace dotnetapp.Controllers
{
    public class UserController : Controller
    {
        // Mocked data for demonstration (replace this with database access)
        private static List<User> users = new List<User>
        {
            new User { UserId = 1, Username = "user1", Email = "user1@example.com" },
            new User { UserId = 2, Username = "user2", Email = "user2@example.com" }
        };

        public IActionResult Index()
        {
            return View(users);
        }

        public IActionResult Details(int id)
        {
            var user = users.FirstOrDefault(u => u.UserId == id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // Other CRUD actions: Create, Edit, Delete
        // Implement these actions based on your needs
    }
}
