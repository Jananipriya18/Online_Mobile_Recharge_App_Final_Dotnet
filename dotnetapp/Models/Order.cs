namespace dotnetapp.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public List<MenuItem> Items { get; set; }
        public User User { get; set; }
    }
}
