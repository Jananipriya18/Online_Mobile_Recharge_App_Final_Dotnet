using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore; 

namespace dotnetapp.Controllers
{
    public class OrderController : Controller
    {
        private readonly ApplicationDbContext _context;

        public OrderController(ApplicationDbContext context)
        {
            _context = context;
        }
        // Mocked data for demonstration (replace this with database access)
        private static List<Order> orders = new List<Order>
        {
            new Order { OrderId = 1, OrderDate = DateTime.Now },
            new Order { OrderId = 2, OrderDate = DateTime.Now.AddDays(-1) }
        };

        public IActionResult Index()
        {
            return View(orders);
        }

        public IActionResult Details(int id)
        {
            var order = orders.FirstOrDefault(o => o.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }
            return View(order);
        }

        [HttpPost]
    public IActionResult AddToOrder(int menuItemId)
    {
        // Retrieve the menu item based on menuItemId
        var menuItem = _context.Menus.FirstOrDefault(m => m.MenuId == menuItemId);

        // Retrieve or create an order for the current user
        var userId = GetCurrentUserId(); // Implement this method to get the current user's ID
        var order = _context.Orders.FirstOrDefault(o => o.UserId == userId && o.Status == OrderStatus.InProgress);

        if (order == null)
        {
            order = new Order
            {
                UserId = userId,
                Status = OrderStatus.InProgress,
                OrderDate = DateTime.Now // Adjust the date as needed
            };
            _context.Orders.Add(order);
        }

        // Add the menu item to the order
        var orderItem = new OrderItem
        {
            Order = order,
            MenuItem = menuItem,
            Quantity = 1 // You can add a quantity if needed
        };
        _context.OrderItems.Add(orderItem);
        _context.SaveChanges();

        // Redirect back to the menu or a different view if needed
        return RedirectToAction("Index", "Menu");
    }

    public IActionResult ViewCart()
    {
        var userId = GetCurrentUserId(); // Implement this method to get the current user's ID

        // Retrieve the user's in-progress order and its items
        var order = _context.Orders
            .Include(o => o.OrderItems)
            .ThenInclude(oi => oi.MenuItem)
            .FirstOrDefault(o => o.UserId == userId && o.Status == OrderStatus.InProgress);

        if (order == null)
        {
            // If no in-progress order exists, show an empty cart or a message
            return View("EmptyCart");
        }

        // Show the cart view with ordered items
        return View(order.OrderItems);
    }
    }
}


