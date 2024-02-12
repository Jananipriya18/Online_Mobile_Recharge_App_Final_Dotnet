using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Models;

public partial class FootballdbContext : DbContext
{
    public FootballdbContext()
    {
    }

    public FootballdbContext(DbContextOptions<FootballdbContext> options) : base(options) { }

    public virtual DbSet<Player> Players { get; set; }

}
