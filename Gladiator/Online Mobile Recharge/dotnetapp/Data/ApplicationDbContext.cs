using Microsoft.EntityFrameworkCore;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Plan> Plans { get; set; }
    public DbSet<Addon> Addons { get; set; }

}
