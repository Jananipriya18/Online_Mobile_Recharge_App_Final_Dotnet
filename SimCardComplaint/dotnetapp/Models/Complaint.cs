using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetapp.Models
{
    public class Complaint
    {
        public int ComplaintID { get; set; }
        public string CustomerName { get; set; }
        public string SIMCardNumber { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public Executive ExecutiveID { get; set; } 
    }
}