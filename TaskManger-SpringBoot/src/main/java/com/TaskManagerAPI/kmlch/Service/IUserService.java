package com.TaskManagerAPI.kmlch.Service;

import com.TaskManagerAPI.kmlch.Entity.User;

import java.util.List;

public interface IUserService {


    public List<User> ListarUser();
    public User buscarUserByEmail(String  email);

    public User guardaUser(User user);

    public void eliminarIngreso(User user);
}
