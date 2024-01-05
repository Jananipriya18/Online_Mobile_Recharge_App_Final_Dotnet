using System.Collections.Generic;

namespace dotnetapp.Models
{
    public class Executive
    {
        public int ExecutiveID { get; set; }
        public string ExecutiveName { get; set; }
        public string ContactNumber { get; set; }
        public ICollection<Complaint> Complaints { get; set; }
    }
}
