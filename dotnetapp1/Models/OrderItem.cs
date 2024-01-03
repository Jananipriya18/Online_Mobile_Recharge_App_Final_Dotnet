namespace dotnetapp.Models
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }
        public int MenuItemId { get; set; }
        public Order Order { get; set; }
    }
}