package com.example.backend.Service;

import com.example.backend.Model.Product;
import com.example.backend.Model.Wishlist;
import com.example.backend.Repository.ProductRepository;
import com.example.backend.Repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Wishlist> getWishlist(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }

    public Wishlist addProductToWishlist(Long userId, Long productId) {
        Optional<Product> productOpt = productRepository.findById(productId);
        if (productOpt.isPresent()) {
            Product product = productOpt.get();
            Wishlist wishlist = new Wishlist();
            wishlist.setUserId(userId);
            wishlist.setProductId(product.getId());
            wishlist.setProductName(product.getName());
            wishlist.setProductDescription(product.getDescription());
            wishlist.setProductPrice(product.getPrice());
            return wishlistRepository.save(wishlist);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void removeProductFromWishlist(Long userId, Long productId) {
        wishlistRepository.deleteByUserIdAndProductId(userId, productId);
    }
}
