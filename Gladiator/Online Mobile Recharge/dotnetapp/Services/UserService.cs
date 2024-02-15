using dotnetapp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using dotnetapp.Data;

namespace dotnetapp.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public UserService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IConfiguration configuration, ApplicationDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _context = context;
        }

        public async Task<bool> RegisterAsync(User user)
        {
            try
            {
                var identityUser = new IdentityUser
                {
                    UserName = user.Username,
                };

                var result = await _userManager.CreateAsync(identityUser, user.Password);

                if (result.Succeeded)
                {
                    // Assign roles to the user
                    if (user.Role == "admin")
                    {
                        await _userManager.AddToRoleAsync(identityUser, "admin");
                    }
                    else if (user.Role == "applicant")
                    {
                        await _userManager.AddToRoleAsync(identityUser, "applicant");
                    }
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                // Handle exceptions appropriately (e.g., logging)
                return false; // Registration failed
            }
        }

        public async Task<string> LoginAsync(string email, string password)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(email);

                if (user == null || !(await _signInManager.CheckPasswordSignInAsync(user, password, false)).Succeeded)
                {
                    Console.WriteLine("Invalid email or password");
                    return null; // Invalid email or password
                }

                // Generate a JWT token
                var token = GenerateJwtToken(user);
                Console.WriteLine("Token: " + token);
                return token;
            }
            catch (Exception ex)
            {
                Console.WriteLine("zxcvbnm" + ex.Message);
                // Handle exceptions appropriately (e.g., logging)
                return null; // Login failed
            }
        }

        private string GenerateJwtToken(IdentityUser user)
        {
            Console.WriteLine("User: " + user.UserName);

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
            };

            var roles = _userManager.GetRolesAsync(user).Result;

            Console.WriteLine("Roles: " + string.Join(", ", roles));

            foreach (var role in roles)
            {
                var roleClaim = new Claim(ClaimTypes.Role, role);
                Console.WriteLine($"Adding role claim: {roleClaim.Type} - {roleClaim.Value}");
                claims.Add(roleClaim);
            }

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: credentials
            );
            Console.WriteLine("Token generated successfully: " + token);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
