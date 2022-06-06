using System;
using System.Collections.Generic;

namespace TodoListWithAPI.Models
{
    public partial class Todo
    {
        public int Id { get; set; }
        public string? Task { get; set; }
        public bool? Completed { get; set; }
    }
}
