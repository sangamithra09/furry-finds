package com.example.backend.Service;

import com.example.backend.Model.OrderItem;
import com.example.backend.Repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    // Add a new order item
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    // Get a list of all order items
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    // Get a specific order item by ID
    public Optional<OrderItem> getOrderItemById(Long id) {
        return orderItemRepository.findById(id);
    }

    // Update an order item
    public OrderItem updateOrderItem(Long id, OrderItem updatedOrderItem) {
        Optional<OrderItem> existingOrderItem = orderItemRepository.findById(id);
        if (existingOrderItem.isPresent()) {
            OrderItem orderItem = existingOrderItem.get();
            orderItem.setProductId(updatedOrderItem.getProductId());
            orderItem.setQuantity(updatedOrderItem.getQuantity());
            orderItem.setPrice(updatedOrderItem.getPrice());
            return orderItemRepository.save(orderItem);
        }
        return null;  // or throw exception based on use case
    }

    // Delete an order item by ID
    public void deleteOrderItem(Long id) {
        orderItemRepository.deleteById(id);
    }
}
