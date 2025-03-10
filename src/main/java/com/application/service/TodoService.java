package com.application.service;

import com.application.entity.Todo;
import com.application.repository.TodoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public Todo createtask(Todo task) {
        return todoRepository.save(task);
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();

    }

    public Todo getTodoById(Long id) {

        return todoRepository.findById(id).get();
    }

    public void deletetask(Long id) {
        todoRepository.deleteById(id);
    }

    public List<Todo> completedtask() {
        return todoRepository.findCompletedTasks();
    }

    public List<Todo> pendingtask() {
        return todoRepository.findpendingTasks();


    }

    public Todo updateTask(Todo task) {
        return todoRepository.save(task);
    }
}



