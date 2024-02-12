
    using dotnetapp.Models;
    using System.Collections.Generic;
    using System.Reflection.Emit;
    using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Data
{

    public class LaundryDbContext : DbContext
    {
        public LaundryDbContext(DbContextOptions<LaundryDbContext> options) : base(options)
        {
        }

        public DbSet<UserSchedule> UserSchedules { get; set; }
        public DbSet<Package> Packages { get; set; }
        public DbSet<LaundryStatus> LaundryStatuses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships and constraints here, if needed
            modelBuilder.Entity<UserSchedule>()
                .HasOne(u => u.Package)
                .WithMany()
                .HasForeignKey(u => u.PackageId);

            modelBuilder.Entity<UserSchedule>()
                .HasOne(u => u.Status)
                .WithMany()
                .HasForeignKey(u => u.StatusId);

            modelBuilder.Entity<Package>().HasData(
        new Package { Id = 1, Name = "Wash & Fold", Description = "Per/kg", PricePerKg = 5.0M, ClothesPerMonth = 70 },
        new Package { Id = 2, Name = "Wash & Iron", Description = "Per/kg", PricePerKg = 7.0M, ClothesPerMonth = 65 },
        new Package { Id = 3, Name = "Individual Package", Description = "60 Clothes /month", PricePerKg = 4.0M, ClothesPerMonth = 60 },
        new Package { Id = 4, Name = "Family Package", Description = "110 Clothes /month", PricePerKg = 10.0M, ClothesPerMonth = 110 },
        new Package { Id = 5, Name = "Pay Per Cloth", Description = "Per cloth", PricePerKg = 11.5M, ClothesPerMonth = 80 },
        new Package { Id = 6, Name = "Saree Polishing", Description = "Per saree", PricePerKg = 9.0M, ClothesPerMonth = 45 },
        new Package { Id = 7, Name = "DryCleaning", Description = "Per/kg", PricePerKg = 8.0M, ClothesPerMonth = 50 },
        new Package { Id = 8, Name = "Premium Laundry", Description = "Per/kg", PricePerKg = 10.0M, ClothesPerMonth = 50 }
    );

            modelBuilder.Entity<LaundryStatus>().HasData(
        new LaundryStatus { Id = 1, Name = "Scheduled" },
        new LaundryStatus { Id = 2, Name = "PickedUp" },
        new LaundryStatus { Id = 3, Name = "UnderLaundry" },
        new LaundryStatus { Id = 4, Name = "QualityCheck" },
        new LaundryStatus { Id = 5, Name = "Delivered" }
    );
        }
    }

}
