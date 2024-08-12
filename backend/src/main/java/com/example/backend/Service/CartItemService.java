package com.example.backend.Service;

import com.example.backend.DTO.CartItemDTO;
import com.example.backend.Model.CartItem;
import com.example.backend.Model.Product;
import com.example.backend.Model.User;
import com.example.backend.Repository.CartItemRepository;
import com.example.backend.Repository.ProductRepository;
import com.example.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private ProductRepository productRepository;

    public CartItem addToCart(Long userId, Long productId, Integer quantity) {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Product> productOptional = productRepository.findById(productId);

        if (userOptional.isPresent() && productOptional.isPresent()) {
            User user = userOptional.get();
            Product product = productOptional.get();
            CartItem cartItem = new CartItem();
            cartItem.setUser(user);
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);

            return cartItemRepository.save(cartItem);
        } else {
            throw new RuntimeException("User or Product not found");
        }
    }
    public Optional<CartItem> getCartItemById(Long id) {
        return cartItemRepository.findById(id);
    }

    public void deleteCartItem(Long id) {
        cartItemRepository.deleteById(id);
    }

    public boolean updateCartItemQuantity(Long id, int quantityChange) {
        Optional<CartItem> optionalCartItem = cartItemRepository.findById(id);
        if (optionalCartItem.isPresent()) {
            CartItem cartItem = optionalCartItem.get();
            int newQuantity = cartItem.getQuantity() + quantityChange;
            if (newQuantity > 0) {
                cartItem.setQuantity(newQuantity);
                cartItemRepository.save(cartItem);
                return true;
            } else {
                // If quantity goes below 1, remove the item
                cartItemRepository.delete(cartItem);
                return false;
            }
        }
        return false;
    }
    public List<CartItemDTO> getCartItemsByUser(Long userId) {
        return cartItemRepository.findByUserId(userId).stream().map(cartItem -> {
            return new CartItemDTO(
                    cartItem.getProduct().getId(),
                    cartItem.getProduct().getName(),
                    cartItem.getProduct().getDescription(),
                    cartItem.getProduct().getPrice(),
                    cartItem.getQuantity()
            );
        }).collect(Collectors.toList());
    }
}
