using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetapp.Models
{

    public class UserSchedule
    {
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        [Phone]
        public string MobileNumber { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Area { get; set; }

        [Required]
        [RegularExpression(@"^\d{6}$")]
        public string Pincode { get; set; }

        [Required]
        public string PickupDay { get; set; }

        [Required]
        public string PickupTimeSlot { get; set; }

        // Foreign key relationship with Package
        [Required]
        public int PackageId { get; set; }

        [ForeignKey("PackageId")]
        public Package? Package { get; set; }

        // Foreign key relationship with LaundryStatus
        [Required]
        public int StatusId { get; set; }

        [ForeignKey("StatusId")]
        public LaundryStatus? Status { get; set; }

        public DateTime? ExpectedDeliveryDate { get; set; }
    }
}