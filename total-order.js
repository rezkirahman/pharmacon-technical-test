function OrderItem(id, orderId, productId, price, quantity) {
    this.ID = id;
    this.OrderID = orderId;
    this.ProductID = productId;
    this.Price = price;
    this.Quantity = quantity;
}

function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.Price * item.Quantity;
    }
    return total;
}

const item1 = new OrderItem(1, 1, 1, 100, 2);
const item2 = new OrderItem(2, 1, 2, 50, 3);
const items = [item1, item2];
const total = calculateTotal(items);
console.log(total);  // Output: 300