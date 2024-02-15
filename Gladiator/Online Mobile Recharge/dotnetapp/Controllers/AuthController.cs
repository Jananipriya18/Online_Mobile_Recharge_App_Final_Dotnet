using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using dotnetapp.Data;

namespace dotnetapp.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IUserService _userService;

        public AuthController(IUserService userService, ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
            _userService = userService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null)
                return BadRequest("Invalid user data");

            if (user.Role == "admin" || user.Role == "applicant")
            {
                Console.WriteLine("Role: " + user.Role);

                // Check for username existence in a case-insensitive manner
                var existingUser = await _userManager.FindByNameAsync(user.Username);

                if (existingUser != null)
                {
                    return BadRequest("Username is already taken.");
                }

                var isRegistered = await _userService.RegisterAsync(user);

                if (isRegistered)
                {
                    var identityUser = new IdentityUser
                    {
                        UserName = user.Username,
                        Email = user.Email,
                    };

                    var result = await _userManager.CreateAsync(identityUser, user.Password);

                    if (result.Succeeded)
                    {
                        await _userManager.AddToRoleAsync(identityUser, user.Role);

                        return Ok(user);
                    }
                }
            }

            return BadRequest("Registration failed. Username may already exist.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
                return BadRequest("Invalid login request");

            var token = await _userService.LoginAsync(request.Email, request.Password);

            if (token == null)
                return Unauthorized("Invalid email or password");

            var user = await _userManager.FindByEmailAsync(request.Email);

            if (user != null)
            {
                var roles = await _userManager.GetRolesAsync(user);
                return Ok(new { Token = token, Roles = roles });
            }

            return Unauthorized("User not found");
        }
    }
}
