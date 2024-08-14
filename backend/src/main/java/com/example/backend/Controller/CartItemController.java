package com.example.backend.Controller;


import com.example.backend.DTO.CartItemDTO;
import com.example.backend.Model.CartItem;
import com.example.backend.Service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

        import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/cartitems")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping("/add")
    public CartItem addToCart(@RequestParam Long userId, @RequestParam Long productId, @RequestParam Integer quantity) {
        return cartItemService.addToCart(userId, productId, quantity);
    }

    @GetMapping("/user/{userId}")
    public List<CartItemDTO> getCartItemsByUser(@PathVariable Long userId) {
        return cartItemService.getCartItemsByUser(userId);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable Long id) {
        Optional<CartItem> cartItem = cartItemService.getCartItemById(id);
        return cartItem.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long id) {
        cartItemService.deleteCartItem(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/increment")
    public ResponseEntity<Void> incrementQuantity(@PathVariable Long id, @RequestParam int amount) {
        boolean success = cartItemService.updateCartItemQuantity(id, amount);
        return success ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}/decrement")
    public ResponseEntity<Void> decrementQuantity(@PathVariable Long id, @RequestParam int amount) {
        boolean success = cartItemService.updateCartItemQuantity(id, -amount);
        return success ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }
}
