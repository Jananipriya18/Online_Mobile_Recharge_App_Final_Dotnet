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
            var orders = _context.Orders.ToList();
            return View(orders);
        }

        public IActionResult Details(int id)
        {
            var order = _context.Orders.FirstOrDefault(o => o.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }
            return View(order);
        }
        [HttpPost]
public IActionResult AddToOrder(int menuItemId)
{
    var menuItem = _context.MenuItems.FirstOrDefault(m => m.MenuId == menuItemId);
    if (menuItem != null)
    {
        var userId = GetCurrentUserId(); // Method to get the current logged-in user's ID
        var currentOrder = _context.Orders.FirstOrDefault(o => o.User.Id == userId && !o.IsCompleted);

        if (currentOrder == null)
        {
            currentOrder = new Order
            {
                OrderDate = DateTime.Now,
                OrderItems = new List<OrderItem>(),
                User = _context.Users.Find(userId) // Assuming there's a User entity in your context
            };
            _context.Orders.Add(currentOrder);
        }

        var newOrderItem = new OrderItem
        {
            MenuItemId = menuItemId,
            Order = currentOrder
            // Other properties as needed
        };

        _context.OrderItems.Add(newOrderItem);
        _context.SaveChanges();
    }

    return RedirectToAction("Index", "Order"); // Redirect to Order Index after adding
}


}}
