using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using dotnetapp.Models;
using dotnetapp.Data;

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

        public IActionResult ViewCart()
        {
            var cartItems = _context.Orders
                .Where(o => o.IsCart) // Assuming there's a property like IsCart to differentiate cart items
                .Include(o => o.Items) // Include related items
                .FirstOrDefault();

            if (cartItems == null)
            {
                return NotFound(); // Handle the case where the cart is empty or not found
            }

            return View("CartView", cartItems); // Pass cartItems to the CartView.cshtml
        }
    }
}
