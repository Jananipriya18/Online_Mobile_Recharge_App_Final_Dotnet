using System;
using System.ComponentModel.DataAnnotations;

public class Order
{
    public int Id { get; set; }
    [Required]
    public string CustomerName { get; set; }
    [Required]
    public string FoodItem { get; set; }
    [Required]
    public decimal Price { get; set; }
    
    public DateTime OrderDate { get; set; } = DateTime.UtcNow;
}
