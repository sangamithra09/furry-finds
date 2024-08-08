package com.example.backend.Controller;

import com.example.backend.Model.CartItem;
import com.example.backend.Service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartItemController {

    @Autowired
    private CartItemService cartService;

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody CartItem cartItem) {
        boolean success = cartService.addToCart(cartItem);
        return success ? ResponseEntity.ok("Item added to cart") : ResponseEntity.status(400).body("Failed to add item to cart");
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<String> removeItem(@PathVariable Long productId) {
        boolean success = cartService.removeItem(productId);
        return success ? ResponseEntity.ok("Item removed") : ResponseEntity.status(400).body("Failed to remove item");
    }

    @GetMapping("/items")
    public ResponseEntity<List<CartItem>> getCartItems() {
        List<CartItem> cartItems = cartService.getCartItems();
        return ResponseEntity.ok(cartItems);
    }
}
