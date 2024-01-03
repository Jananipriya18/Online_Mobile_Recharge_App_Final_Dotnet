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