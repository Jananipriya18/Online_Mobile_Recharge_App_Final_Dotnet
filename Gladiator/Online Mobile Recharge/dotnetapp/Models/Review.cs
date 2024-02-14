// Plan model
using dotnetapp.Data;

namespace dotnetapp.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
 
        public long UserId { get; set; }
        public string Subject { get; set; }
 
        public string Body { get; set; }
 
        [Range(1, 5)]
        public int Rating { get; set; }
 
        public DateTime DateCreated { get; set; }
 
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
    }
}

