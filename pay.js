document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const receiptItemsTable = document.querySelector('#receipt-items tbody');
    const grandTotalElement = document.getElementById('grand-total');
  
    if (cart.length === 0) {
      alert('Your cart is empty! Add items to view the receipt.');
      return;
    }
  
    function displayReceipt() {
      receiptItemsTable.innerHTML = '';
      let grandTotal = 0;
  
      cart.forEach(item => {
        const row = document.createElement('tr');
  
        
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
  
        
        const priceCell = document.createElement('td');
        priceCell.textContent = `${item.price} LE`;
        row.appendChild(priceCell);
  
        
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);
  
        
        const subtotalCell = document.createElement('td');
        const subtotal = item.price * item.quantity;
        subtotalCell.textContent = `${subtotal} LE`;
        row.appendChild(subtotalCell);
  
        receiptItemsTable.appendChild(row);
        grandTotal += subtotal;
      });
  
      grandTotalElement.textContent = `${grandTotal} LE`;
    }
  
    
    displayReceipt();
  

  function clearCart() {
    localStorage.removeItem('cart');
    alert('Thank you for your order!');
  }
  
  });
  