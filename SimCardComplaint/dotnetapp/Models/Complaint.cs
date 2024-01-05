using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetapp.Models
{
    public class Complaint
    {
        public int ComplaintID { get; set; }
        public string CustomerName { get; set; }
        public string ContactNumber { get; set; }
        public string SIMCardNumber { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public int ExecutiveID { get; set; }
        public Executive Executive { get; set; }
    }

}
