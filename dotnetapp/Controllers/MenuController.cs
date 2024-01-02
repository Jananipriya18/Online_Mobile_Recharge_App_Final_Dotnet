using Microsoft.AspNetCore.Mvc;
using FoodOrderingApp.Models;
using FoodOrderingApp.Services;

namespace FoodOrderingApp.Controllers
{
    public class MenuController : Controller
    {
        private readonly MenuService _menuService;

        public MenuController(MenuService menuService)
        {
            _menuService = menuService;
        }

        // Actions for Menu CRUD operations
        // Example actions: Index, Create, Edit, Delete, Details, etc.
        // Implement these actions based on your application's requirements
    }
}
