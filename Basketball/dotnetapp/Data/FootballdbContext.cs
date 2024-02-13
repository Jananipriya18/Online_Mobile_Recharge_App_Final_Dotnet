using dotnetapp.Models;
using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Data
{
    public class FootballdbContext : DbContext
    {
        public FootballdbContext(DbContextOptions<FootballdbContext> options) : base(options) { }

        public  DbSet<Player> Players { get; set; }

    }
}
