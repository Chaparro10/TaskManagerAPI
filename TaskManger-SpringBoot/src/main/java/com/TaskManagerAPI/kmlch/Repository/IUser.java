package com.TaskManagerAPI.kmlch.Repository;


import com.TaskManagerAPI.kmlch.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUser extends JpaRepository<User,Long> {


    User findByEmail(String email);


}
