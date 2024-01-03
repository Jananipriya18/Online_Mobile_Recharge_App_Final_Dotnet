// using System;
// using System.ComponentModel.DataAnnotations;

// public class Order
// {
//     public int Id { get; set; }
//     [Required]
//     public string CustomerName { get; set; }
//     [Required]
//     public string FoodItem { get; set; }
//     [Required]
//     public decimal Price { get; set; }

//     public DateTime OrderDate { get; set; } = DateTime.UtcNow;
// }

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

// namespace Deliveryboy.Models
// {
//     public class Delivery
//     {
//         public int DeliveryID { get; set; }
//         public DateTime Date { get; set; }
//         public int OrderID { get; set; }
//         public string Status { get; set; }
//         public Order Order { get; set; }
        
//     }
// }


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetapp.Models
{
    public class FoodOrder
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int OrderID { get; set; }
        public string FoodName { get; set; }
        public decimal Price {get; set;}
        public int rating { get; set;}
    }
}