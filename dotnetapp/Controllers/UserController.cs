using Microsoft.AspNetCore.Mvc;
using FoodOrderingApp.Models;
using FoodOrderingApp.Services;

namespace FoodOrderingApp.Controllers
{
    public class UserController : Controller
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        // Actions for User CRUD operations
        // Example actions: Index, Create, Edit, Delete, Details, etc.
        // Implement these actions based on your application's requirements
    }
}
