let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 2.78 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 2.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 1.6 },
];

function printReceipt(array) {
  console.log("QTY".padStart(0), "Item".padStart(10), "Total".padStart(20));
  let orderTotal = 0;
  array.forEach((item) => {
    const { itemName, quantity, unitPrice } = item;
    let individualItemTotal = quantity * unitPrice;
    orderTotal += unitPrice;

    console.log(
      quantity.toString().padEnd(9, " "),
      itemName.padEnd(19, " "),
      individualItemTotal.toFixed(2)
    );
  });
  console.log(`\nTotal: ${orderTotal}`);
}
printReceipt(order);
