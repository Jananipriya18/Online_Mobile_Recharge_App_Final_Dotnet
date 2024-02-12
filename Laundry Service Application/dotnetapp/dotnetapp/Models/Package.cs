using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Package
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public decimal PricePerKg { get; set; }

        public int ClothesPerMonth { get; set; }
    }

}
