using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using System.Collections.Generic;

namespace dotnetapp.Controllers
{
    public class MenuController : Controller
    {
        // Mocked data for demonstration (replace this with database access)
        private static List<Menu> menus = new List<Menu>
        {
            new Menu { MenuId = 1, Name = "Burger", Price = 5.99M },
            new Menu { MenuId = 2, Name = "Pizza", Price = 8.99M }
        };

        public IActionResult Index()
        {
            return View(menus);
        }

        public IActionResult Details(int id)
        {
            var menu = menus.FirstOrDefault(m => m.MenuId == id);
            if (menu == null)
            {
                return NotFound();
            }
            return View(menu);
        }

        // Other CRUD actions: Create, Edit, Delete
        // Implement these actions based on your needs
    }
}
 