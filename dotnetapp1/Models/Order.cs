namespace dotnetapp.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public List<Menu> Items { get; set; }
        public User User { get; set; }

        public Order()
        {
            Items = new List<Menu>();
        }
    }
}
