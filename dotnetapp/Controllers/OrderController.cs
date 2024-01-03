using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    public class OrderController : Controller
    {
        private readonly ApplicationDbContext _context;

        public OrderController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var orders = _context.Orders.Include(o => o.Items).ToList();
            return View(orders);
        }

        public IActionResult Details(int id)
        {
            var order = _context.Orders.Include(o => o.Items).FirstOrDefault(o => o.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }
            return View(order);
        }

        [HttpPost]
        public IActionResult AddToOrder(int menuItemId)
        {
            var menuItem = _context.Menu.FirstOrDefault(m => m.MenuId == menuItemId);

            if (menuItem != null)
            {
                var order = _context.Orders.Include(o => o.Items).FirstOrDefault();
                if (order == null)
                {
                    order = new Order { OrderDate = DateTime.Now };
                    _context.Orders.Add(order);
                }

                order.Items.Add(menuItem);
                _context.SaveChanges();

                return RedirectToAction("Index", "Home"); // Redirect to wherever you want after adding to the order
            }

            // Handle the case where the menu item is not found
            return RedirectToAction("MenuNotFound", "Error"); // Redirect to an error page or handle accordingly
        }
    }
}
