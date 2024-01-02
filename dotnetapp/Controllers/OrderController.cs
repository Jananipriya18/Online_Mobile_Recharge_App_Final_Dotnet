using Microsoft.AspNetCore.Mvc;
using FoodOrderingApp.Models;
using FoodOrderingApp.Services;

namespace FoodOrderingApp.Controllers
{
    public class OrderController : Controller
    {
        private readonly OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        // Actions for Order CRUD operations
        // Example actions: Index, Create, Edit, Delete, Details, etc.
        // Implement these actions based on your application's requirements
    }
}
