using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/football")]
[ApiController]
public class PlayerController : ControllerBase
{
    private readonly FootballdbContext _context;

    public PlayerController(FootballdbContext context)
    {
        _context = context;
    }

    // GET /api/football/players
    [HttpGet("players")]
    public IActionResult GetPlayers()
    {
        var players = _context.Players.ToList();
        return Ok(players);
    }

    // POST /api/football/player/add
    [HttpPost("player/add")]
    public IActionResult AddPlayer(Player player)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Players.Add(player);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetPlayers), new { id = player.Id }, player);
    }
}
