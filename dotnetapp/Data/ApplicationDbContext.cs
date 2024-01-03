using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Order>Orders{ get; set; }
        public DbSet<Menu>Menus{ get; set; }
        public DbSet<User>Users{ get; set; }
    }
}