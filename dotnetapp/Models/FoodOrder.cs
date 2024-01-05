using System;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class FoodOrder
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Food Name is required")]
        public string FoodName { get; set; }

        [Required(ErrorMessage = "Price is required")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "Date is required")]
        public DateTime Date { get; set; }

        [Required(ErrorMessage = "Rating is required")]
        [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5")]
        public decimal Rating { get; set; }
    }
}
