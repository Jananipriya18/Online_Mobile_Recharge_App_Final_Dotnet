using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/laundry")]
[ApiController]
public class LaundryController : ControllerBase
{
    private readonly LaundryDbContext _context;

    public LaundryController(LaundryDbContext context)
    {
        _context = context;
    }

    // GET /api/laundry/schedules
    [HttpGet("schedules")]
    public IActionResult GetSchedules()
    {
        var schedules = _context.UserSchedules.ToList();
        return Ok(schedules);
    }

    // POST /api/laundry/schedule/add
    [HttpPost("schedule/add")]
    public IActionResult AddSchedule(UserSchedule userSchedule)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.UserSchedules.Add(userSchedule);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetSchedules), new { id = userSchedule.Id }, userSchedule);
    }

}
