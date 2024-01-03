using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
{
    public class OrderController : Controller
    {
        // Mock database for demonstration purposes
        private static List<Order> orders = new List<Order>
        {
            new Order { Id = 1, CustomerName = "John Doe", FoodItem = "Burger", Price = 10.99m, OrderDate = DateTime.UtcNow },
            new Order { Id = 2, CustomerName = "Alice Smith", FoodItem = "Pizza", Price = 15.50m, OrderDate = DateTime.UtcNow }
        };

        public IActionResult Index()
        {
            return View(orders);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Order order)
        {
            order.Id = orders.Count > 0 ? orders.Max(o => o.Id) + 1 : 1;
            order.OrderDate = DateTime.UtcNow;
            orders.Add(order);
            return RedirectToAction("Index");
        }

        public IActionResult Edit(int id)
        {
            var order = orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            return View(order);
        }

        [HttpPost]
        public IActionResult Edit(Order order)
        {
            var existingOrder = orders.FirstOrDefault(o => o.Id == order.Id);
            if (existingOrder == null)
            {
                return NotFound();
            }
            existingOrder.CustomerName = order.CustomerName;
            existingOrder.FoodItem = order.FoodItem;
            existingOrder.Price = order.Price;
            return RedirectToAction("Index");
        }

        public IActionResult Delete(int id)
        {
            var order = orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            return View(order);
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirmed(int id)
        {
            var order = orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            orders.Remove(order);
            return RedirectToAction("Index");
        }
    }
}
