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
            var menuItem = _context.Menus.FirstOrDefault(m => m.MenuId == menuItemId);
            if (menuItem == null)
            {
                return NotFound();
            }

            var userId = GetCurrentUserId();

            var order = _context.Orders.FirstOrDefault(o => o.UserId == userId && o.Status == OrderStatus.InProgress);
            if (order == null)
            {
                order = new Order
                {
                    UserId = userId,
                    Status = OrderStatus.InProgress, // Define OrderStatus enum
                    OrderDate = DateTime.Now
                };
                _context.Orders.Add(order);
            }

            var orderItem = new OrderItem
            {
                Order = order,
                MenuItem = menuItem,
                Quantity = 1
            };
            _context.OrderItems.Add(orderItem);
            _context.SaveChanges();

            return RedirectToAction("Index", "Menu");
        }

        public IActionResult ViewCart()
        {
            var userId = GetCurrentUserId();

            var order = _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.MenuItem)
                .FirstOrDefault(o => o.UserId == userId && o.Status == OrderStatus.InProgress);

            if (order == null)
            {
                return View("EmptyCart");
            }

            return View(order.OrderItems);
        }

        private int GetCurrentUserId()
        {
            // Implement your logic to retrieve the current user's ID
            return 0; // Placeholder - Replace with your logic to get the user ID
        }
    }
}
