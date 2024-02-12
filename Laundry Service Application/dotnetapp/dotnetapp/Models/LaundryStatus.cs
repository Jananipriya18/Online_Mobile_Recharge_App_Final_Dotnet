using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class LaundryStatus
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }

}
