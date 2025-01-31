package com.TaskManagerAPI.kmlch.Controller;


import com.TaskManagerAPI.kmlch.Entity.User;
import com.TaskManagerAPI.kmlch.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:8080")
@RequestMapping("/api/user")

public class UserController {

    @Autowired
    private  UserService userService;


    @GetMapping
    public List<User> getAllUser() {
        List<User> users = userService.ListarUser();
        if (users.isEmpty()) {
            System.out.println("No se encontraron usuarios.");
        }
        return users;
    }

    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email){//por paramss
            return userService.buscarUserByEmail(email);
    }

    @PostMapping
    public User createUser (@RequestBody User user){
        return userService.guardaUser(user);
    }



}
