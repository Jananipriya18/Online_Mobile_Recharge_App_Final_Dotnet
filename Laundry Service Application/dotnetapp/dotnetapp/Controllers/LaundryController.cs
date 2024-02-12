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
    public async Task<ActionResult<IEnumerable<UserSchedule>>> GetSchedules()
    {
        var schedules = await _context.UserSchedules.ToListAsync();
        return Ok(schedules);
    }

    // POST /api/laundry/schedule/add
    [HttpPost("schedule/add")]
    public async Task<ActionResult<UserSchedule>> AddSchedule(UserSchedule userSchedule)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Set default status for new schedule (e.g., "Scheduled")
        // Note: You may need to adjust this based on your actual status IDs or logic
        userSchedule.PickupDay = "DefaultDay";
        userSchedule.PickupTimeSlot = "DefaultTimeSlot";

        _context.UserSchedules.Add(userSchedule);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetSchedules), new { id = userSchedule.Id }, userSchedule);
    }
}
