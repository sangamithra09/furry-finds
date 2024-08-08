package com.example.backend.Service;

import com.example.backend.Model.CartItem;
import com.example.backend.Reopsitory.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartRepository;

    public boolean addToCart(CartItem cartItem) {
        try {
            Optional<CartItem> existingItem = cartRepository.findById(cartItem.getId());
            if (existingItem.isPresent()) {
                CartItem item = existingItem.get();
                item.setQuantity(item.getQuantity() + 1);
                cartRepository.save(item);
            } else {
                cartItem.setQuantity(1);
                cartRepository.save(cartItem);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    public boolean removeItem(Long productId) {
        try {
            Optional<CartItem> item = cartRepository.findById(productId);
            if (item.isPresent()) {
                cartRepository.delete(item.get());
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<CartItem> getCartItems() {
        return cartRepository.findAll();
    }
}
