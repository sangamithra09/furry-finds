package com.example.backend.Repository;

import com.example.backend.Model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    // You can add custom query methods if needed
     List<OrderItem> findByOrderId(Long orderId);
}
