package com.example.backend.Controller;

import com.example.backend.Model.Wishlist;
import com.example.backend.Service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @GetMapping("/{userId}")
    public List<Wishlist> getWishlist(@PathVariable Long userId) {
        return wishlistService.getWishlist(userId);
    }

    @PostMapping("/add")
    public Wishlist addProductToWishlist(@RequestParam Long userId, @RequestParam Long productId) {
        return wishlistService.addProductToWishlist(userId, productId);
    }

    @DeleteMapping("/remove")
    public void removeProductFromWishlist(@RequestParam Long userId, @RequestParam Long productId) {
        wishlistService.removeProductFromWishlist(userId, productId);
    }
}
