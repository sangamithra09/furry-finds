package com.example.backend.Repository;

import com.example.backend.Model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
    List<Wishlist> findByUserId(Long userId);
    void deleteByUserIdAndProductId(Long userId, Long productId);
}
