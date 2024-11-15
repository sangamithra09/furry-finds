package com.example.backend.Service;

import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServ {
    @Autowired
    private UserRepo repo;
    public List<User> getAllUsers()
    {
        return repo.findAll();
    }
    public User postData(User u) {
        return repo.save(u);
    }
    public ResponseEntity<?> login(User u) {
        User exist = repo.findByEmail(u.getEmail());
        if (exist == null) {
            return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
        }
        if (u.getPassword().equals(exist.getPassword())) {
            String data[] = new String[2];
            data[0]=Long.toString(exist.getId());
            data[1]=exist.getName();

            return new ResponseEntity<>(data, HttpStatus.OK);
        }
        return new ResponseEntity<>("Email or Password is Invalid" ,HttpStatus.UNAUTHORIZED);
    }
    public String deleteId(long id) {
        repo.deleteById(id);
        return "deleted";
    }
    public Optional<User> getUserById(Long id) {
        return repo.findById(id);
    }
    public String update(User u,long id) {
        u.setId(id);
        repo.save(u);
        return "";
    }

}
