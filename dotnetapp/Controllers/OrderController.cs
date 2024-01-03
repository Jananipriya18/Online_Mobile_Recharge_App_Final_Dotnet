using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using System.Collections.Generic;

namespace dotnetapp.Controllers
{
    public class OrderController : Controller
    {
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
        var menuItem = _menuService.GetMenuItemById(menuItemId);

        // Create an order or retrieve an existing order for the user
        var order = _orderService.GetOrCreateOrderForCurrentUser();

        // Add the menu item to the order
        _orderService.AddMenuItemToOrder(order, menuItem);

        // Redirect back to the menu or a different view if needed
        return RedirectToAction("Index", "Menu");
    }

    public IActionResult ViewCart()
    {
        // Retrieve the current user's cart or active order
        var order = _orderService.GetActiveOrderForCurrentUser();

        // Get the ordered items in the cart
        var orderedItems = _orderService.GetOrderedItems(order);

        // Display the cart or ordered items view
        return View(orderedItems);
    }
}
    }



