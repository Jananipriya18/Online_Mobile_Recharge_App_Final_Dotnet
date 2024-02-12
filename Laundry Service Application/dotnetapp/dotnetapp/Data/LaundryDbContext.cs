using dotnetapp.Models;
using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Data
{
    public class LaundryDbContext : DbContext
    {
        public LaundryDbContext(DbContextOptions<LaundryDbContext> options) : base(options) { }

        public DbSet<UserSchedule> UserSchedules { get; set; }

    }
}
