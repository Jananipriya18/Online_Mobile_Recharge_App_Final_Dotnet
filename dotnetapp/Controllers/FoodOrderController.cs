using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using dotnetapp.Data;

namespace dotnetapp.Controllers
{
    public class FoodOrderController : Controller
    {
        private readonly ApplicationDbContext _context;

        public FoodOrderController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.FoodOrders.ToListAsync());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(FoodOrder foodOrder)
        {
            if (ModelState.IsValid)
            {
                _context.Add(foodOrder);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(foodOrder);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var foodOrder = await _context.FoodOrders.FindAsync(id);
            if (foodOrder == null)
            {
                return NotFound();
            }
            return View(foodOrder);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, FoodOrder foodOrder)
        {
            if (id != foodOrder.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(foodOrder);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FoodOrderExists(foodOrder.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(foodOrder);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var foodOrder = await _context.FoodOrders.FirstOrDefaultAsync(m => m.Id == id);
            if (foodOrder == null)
            {
                return NotFound();
            }

            return View(foodOrder);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var foodOrder = await _context.FoodOrders.FindAsync(id);
            if (foodOrder != null)
            {
                _context.FoodOrders.Remove(foodOrder);
                await _context.SaveChangesAsync();
            }

            return RedirectToAction(nameof(Index));
        }

        private bool FoodOrderExists(int id)
        {
            return _context.FoodOrders.Any(e => e.Id == id);
        }
        
    }
}
