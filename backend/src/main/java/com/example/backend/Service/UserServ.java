package com.example.backend.Service;

import com.example.backend.Model.User;
import com.example.backend.Reopsitory.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServ {
    @Autowired
    private UserRepo repo;

    public User postData(User u) {
        return repo.save(u);
    }
    public ResponseEntity<?> login(User u) {
        User exist = repo.findByEmail(u.getEmail());
        if (exist == null) {
            return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
        }
        if (u.getPassword().equals(exist.getPassword())) {
            return new ResponseEntity<>(exist, HttpStatus.OK);
        }
        return new ResponseEntity<>("Email or Password is Invalid" ,HttpStatus.UNAUTHORIZED);
    }
    public String deleteId(long id) {
        repo.deleteById(id);
        return "deleted";
    }
    public String update(User u,long id) {
        u.setId(id);
        repo.save(u);
        return "";
    }
}
