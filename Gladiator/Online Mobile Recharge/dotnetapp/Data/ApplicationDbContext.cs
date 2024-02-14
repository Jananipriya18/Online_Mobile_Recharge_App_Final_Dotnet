using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using Microsoft.AspNetCore.Identity;

namespace dotnetapp.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Addon> Addons { get; set; }
        public DbSet<Recharge> Recharges { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Foreign key relationships for Recharge
            modelBuilder.Entity<Recharge>()
                .HasOne(r => r.User)
                .WithMany(u => u.Recharges)
                .HasForeignKey(r => r.UserId);

            modelBuilder.Entity<Recharge>()
                .HasOne(r => r.Plan)
                .WithMany(p => p.Recharges)
                .HasForeignKey(r => r.PlanId);
        }
    }
}
