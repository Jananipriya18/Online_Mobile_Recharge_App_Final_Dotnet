public class OrderItem
{
    public int OrderItemId { get; set; }
    public int MenuItemId { get; set; }
    // Other properties as needed

    public Order Order { get; set; }
}