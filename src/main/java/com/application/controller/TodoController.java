package com.application.controller;

import com.application.entity.Todo;
import com.application.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/createnewtask")
    public Todo createNewtask(@RequestBody Todo task) {
        return todoService.createtask(task);


    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/displaytask")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/findtask/{id}")
    public Todo getTodoById(@PathVariable Long id) {

          return todoService.getTodoById(id);
        }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deletetask/{id}")
    public void deletetask(@PathVariable Long id) {
            todoService.deletetask(id);


        }

    @GetMapping("/listcompletedtask")
    public List<Todo> listcompletedtask() {
        return todoService.completedtask();
    }

    @GetMapping("/listpendingtask")
    public List<Todo> listpendingtask() {
        return todoService.pendingtask();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updatetask/{id}")
    public ResponseEntity<Todo> updateTask(@PathVariable Long id, @RequestBody Todo task) {
        task.setId(id);
        return ResponseEntity.ok(todoService.updateTask(task));


    }
}












