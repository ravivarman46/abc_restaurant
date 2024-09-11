import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-orders',
  templateUrl: './staff-orders.component.html',
  styleUrls: ['./staff-orders.component.css']
})
export class StaffOrdersComponent implements OnInit {
  orders: any[] = [];
  newOrder = {
    customerName: '',
    orderDetails: '',
    amount: 0
  };
  editMode: boolean = false;
  orderToEdit: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllOrders();
  }

  
  getAllOrders() {
    this.http.get('http://localhost:5000/orders')
      .subscribe((data: any) => {
        this.orders = data;
      }, error => {
        console.error('Error fetching orders:', error);
      });
  }

 
  addOrder() {
    if (!this.newOrder.customerName || !this.newOrder.orderDetails || this.newOrder.amount <= 0) {
      alert('Please fill all fields');
      return;
    }

    this.http.post('http://localhost:5000/orders', this.newOrder)
      .subscribe(response => {
        alert('Order added successfully!');
        this.getAllOrders();  
        this.newOrder = { customerName: '', orderDetails: '', amount: 0 };
      }, error => {
        console.error('Error adding order:', error);
      });
  }

  
  editOrder(order: any) {
    this.editMode = true;
    this.orderToEdit = { ...order };
  }

 
  updateOrder() {
    this.http.put(`http://localhost:5000/orders/${this.orderToEdit.id}`, this.orderToEdit)
      .subscribe(response => {
        alert('Order updated successfully!');
        this.getAllOrders(); 
        this.editMode = false;
        this.orderToEdit = null;
      }, error => {
        console.error('Error updating order:', error);
      });
  }

 
  deleteOrder(orderId: number) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.http.delete(`http://localhost:5000/orders/${orderId}`)
        .subscribe(response => {
          alert('Order deleted successfully!');
          this.getAllOrders();  
        }, error => {
          console.error('Error deleting order:', error);
        });
    }
  }
}
