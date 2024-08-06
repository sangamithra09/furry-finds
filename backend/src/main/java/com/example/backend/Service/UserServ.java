package com.example.backend.Service;

import com.example.backend.Model.User;
import com.example.backend.Reopsitory.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServ {
    @Autowired
    private UserRepo repo;

    public User postData(User u) {
        return repo.save(u);
    }
    public List<User> get()
    {
        return repo.findAll();
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
