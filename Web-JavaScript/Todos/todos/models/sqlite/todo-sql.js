// Create Table
exports.createTodoTable = () => {
  return `create table if not exists todo(
        todoId integer primary key autoincrement,
        job text
    )`;
};

// String type은 ' ' 로 감싼다.
exports.insertTodo = (job) => {
  return `insert into todo(job) values( '${job}' )`;
};

exports.selectTodos = () => {
  return `select * from todo`;
};

exports.deleteTodo = (todoId) => {
  return `delete from todo where todoId=${todoId}`;
};
