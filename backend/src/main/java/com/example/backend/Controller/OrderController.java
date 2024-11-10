package com.example.backend.Controller;

import com.example.backend.Model.Order;
import com.example.backend.Model.OrderItem;
import com.example.backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @GetMapping
    public List<Order> getall()
    {
        return orderService.getOrders();
    }
    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(@RequestParam Long userId, @RequestParam Double totalAmount, @RequestBody List<OrderItem> orderItems) {
        Order order = orderService.createOrder(userId, totalAmount, orderItems);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);

        // If orderItems are fetched lazily, make sure to initialize them
        order.getOrderItems().size(); // Forces loading of orderItems

        return ResponseEntity.ok(order);
    }

    // Other methods for handling orders (e.g., get orders, update, delete)
}
