using Microsoft.AspNetCore.Mvc;
using TodoListWithAPI.Models;

namespace TodoListWithAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        TodoDBContext todoDB = new TodoDBContext();

        [HttpGet("SearchByTask/{taskToSearch}")]
        public List<Todo> SearchByTask(string taskToSearch)
        {
            return todoDB.Todos.Where(m => m.Task.Contains(taskToSearch)).ToList();
        }

        [HttpGet("GetAllTodos")]
        public List<Todo> GetAllTodos()
        {
            return todoDB.Todos.ToList();
        }

        [HttpPost("CreateTodo")] 
        public string CreateMovie(Todo m)
        {
            todoDB.Todos.Add(m);
            todoDB.SaveChanges();
            return m.Task + " has been successfully added to the database";
        }

        [HttpPut("DeleteTodo/{id}")]
        public string DeleteTodo(int id)
        {
            Todo toDelete = todoDB.Todos.Find(id);
            if (toDelete != null)
            {
                todoDB.Todos.Remove(toDelete);
                todoDB.SaveChanges();
                return id + " has been successfully deleted.";
            }

            return $"No todo was found at id {id}.";
        }

        [HttpPut("UpdateTodo/{id}")]
        public string UpdateTodo(int id, Todo todo)
        {
            Todo toUpdate = todoDB.Todos.Find(id);

            if (toUpdate != null)
            {
                toUpdate.Task = todo.Task;
                toUpdate.Completed = todo.Completed;

                todoDB.Update(toUpdate);
                todoDB.SaveChanges();

                return $"Todo with id {id} has been updated.";
            }

            return $"No todo was found at id {id}.";
        }
    }
}
