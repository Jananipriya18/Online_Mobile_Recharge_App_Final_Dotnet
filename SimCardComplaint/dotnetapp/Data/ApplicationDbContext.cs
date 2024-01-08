using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Executive> Executives { get; set; }
        public DbSet<Complaint> Complaints { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            modelBuilder.Entity<Executive>()
                .HasMany(e => e.Complaints)
                .WithOne(c => c.Executive)
                .HasForeignKey(c => c.ExecutiveID);
        }
    }
}
