package com.example.backend.Service;

import com.example.backend.Model.Order;
import com.example.backend.Model.OrderItem;
import com.example.backend.Repository.OrderItemRepository;
import com.example.backend.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    public List<Order> getOrders()
    {
        return orderRepository.findAll();
    }
    public Order getOrderById(Long orderId) {
        // Fetch the order by ID
        Optional<Order> orderOptional = orderRepository.findById(orderId);

        // Throw an exception or return null if the order is not found
        if (!orderOptional.isPresent()) {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }

        // Return the order, which should include orderItems if correctly mapped
        return orderOptional.get();
    }
    @Autowired
    private OrderItemRepository orderItemRepository;


    // Create a new order along with associated order items
    public Order createOrder(Long userId, Double totalAmount, List<OrderItem> orderItems) {
        Order order = new Order();
        order.setUserId(userId);
        order.setTotalAmount(totalAmount);
        order.setStatus("PENDING");  // Set the default status
        order.setOrderDate(LocalDateTime.now()); // Set current time as order date

        // Save the order first (so we have the orderId)
        order = orderRepository.save(order);

        // Set order items and associate with the order
        for (OrderItem item : orderItems) {
            item.setOrder(order);
        }
        order.setOrderItems(orderItems);

        return orderRepository.save(order);

        // Save the order items
//        orderItemRepository.saveAll(orderItems);

        // Return the created order
//        return order;
    }
}
