package com.TaskManagerAPI.kmlch.Service;


import com.TaskManagerAPI.kmlch.Entity.User;
import com.TaskManagerAPI.kmlch.Repository.IUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements  IUserService {

    @Autowired
    private   IUser userRepository;

    @Override
    public List<User> ListarUser() {
        return userRepository.findAll();
    }

    @Override
    public User buscarUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User guardaUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void eliminarIngreso(User user) {
        userRepository.delete(user);
    }
}
