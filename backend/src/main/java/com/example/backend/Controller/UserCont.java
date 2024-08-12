package com.example.backend.Controller;
import com.example.backend.Model.User;
import com.example.backend.Service.UserServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserCont {
    @Autowired
    private UserServ s;

    @PostMapping("/register")
    public User post(@RequestBody User u){
        return s.postData(u);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User u){
        return s.login(u);
    }
    @DeleteMapping("/delAccount/{id}")
    public String deleteId(@PathVariable long id)
    {
        return s.deleteId(id);

    }
    @PutMapping("/updateAccount/{id}")
    public String update(@RequestBody User u,@PathVariable long id) {
        s.update(u, id);
        return "Updated";

    }

}

