package com.application.repository;


import com.application.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Long> {


    @Query(value = "SELECT * FROM todo WHERE STATUS = 'completed';",nativeQuery = true)
    List<Todo> findCompletedTasks();

    @Query(value = "SELECT * FROM todo WHERE STATUS = 'pending';",nativeQuery = true)
    List<Todo> findpendingTasks();

    @Query(value = "UPDATE todo SET STATUS = 'completed' WHERE id = :Id", nativeQuery = true)
    void updateTaskStatus(@Param("Id") Long Id);



}
