using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
        //var schedules = await _context.UserSchedules.ToListAsync();
        var schedules = await _context.UserSchedules
    .Include(u => u.Package)
    .Include(u => u.Status)
    .ToListAsync();
        return Ok(schedules);
    }

    // GET /api/laundry/packages
    [HttpGet("packages")]
    public async Task<ActionResult<IEnumerable<Package>>> GetPackages()
    {
        var packages = await _context.Packages.ToListAsync();
        return Ok(packages);
    }

    // GET /api/laundry/status
    [HttpGet("status")]
    public async Task<ActionResult<IEnumerable<LaundryStatus>>> GetStatus()
    {
        var statuses = await _context.LaundryStatuses.ToListAsync();
        return Ok(statuses);
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
        userSchedule.StatusId = 1; // You may need to adjust this based on your actual status IDs

        // Set expected delivery date based on the selected pickup day and time (add your logic here)
        //userSchedule.ExpectedDeliveryDate = CalculateExpectedDeliveryDate(userSchedule.PickupDay, userSchedule.PickupTimeSlot);

        // Fetch the selected package details based on PackageId
        var selectedPackage = await _context.Packages.FindAsync(userSchedule.PackageId);
        if (selectedPackage == null)
        {
            return NotFound("Package not found"); // Handle the case where the package doesn't exist
        }

        var selectedStatus = await _context.LaundryStatuses.FindAsync(userSchedule.StatusId);
        if (selectedStatus == null)
        {
            return NotFound("Status not found"); // Handle the case where the package doesn't exist
        }

        // Associate the selected package with the schedule
        userSchedule.Package = selectedPackage;
        userSchedule.Status = selectedStatus;

        _context.UserSchedules.Add(userSchedule);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetSchedules), new { id = userSchedule.Id }, userSchedule);
    }

    [HttpPut("schedule/update/{id}/{statusId}")]
    public async Task<ActionResult<UserSchedule>> UpdateScheduleStatus(int id, int statusId)
    {
        // Find the schedule item by ID
        var userSchedule = await _context.UserSchedules.FindAsync(id);

        if (userSchedule == null)
        {
            return NotFound("Schedule not found"); // Handle the case where the schedule doesn't exist
        }

        // Find the selected status by ID
        var selectedStatus = await _context.LaundryStatuses.FindAsync(statusId);

        if (selectedStatus == null)
        {
            return NotFound("Status not found"); // Handle the case where the status doesn't exist
        }

        // Update the status for the schedule
        userSchedule.Status = selectedStatus;

        try
        {
            await _context.SaveChangesAsync();
            return Ok(userSchedule); // Return the updated schedule
        }
        catch (DbUpdateConcurrencyException)
        {
            return StatusCode(500, "An error occurred while updating the schedule."); // Handle DB update error
        }
    }

    [HttpDelete("schedule/delete/{id}")]
    public async Task<ActionResult> DeleteSchedule(int id)
    {
        // Find the schedule item by ID
        var userSchedule = await _context.UserSchedules.FindAsync(id);

        if (userSchedule == null)
        {
            return NotFound("Schedule not found"); // Handle the case where the schedule doesn't exist
        }

        try
        {
            _context.UserSchedules.Remove(userSchedule);
            await _context.SaveChangesAsync();
            return NoContent(); // Return a 204 No Content response on success
        }
        catch (Exception)
        {
            return StatusCode(500, "An error occurred while deleting the schedule."); // Handle delete error
        }

    }




    private DateTime? CalculateExpectedDeliveryDate(string pickupDay, string pickupTimeSlot)
    {
        throw new NotImplementedException();
    }

    // You can add more actions and methods as needed
}
