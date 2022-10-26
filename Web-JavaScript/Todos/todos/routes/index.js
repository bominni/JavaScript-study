var express = require('express');
// const db = require('../models/sqlite/db');
// const sql = require('../models/sqlite/todo-sql');
// const tododb = require('../models/mariadb/todo');
const Todo = require('../models/sequelize/todoModel');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) =>{
  // const rows = await tododb.selectTodos();
  const rows = await Todo.findAll();
  res.render('index', {todos:rows});
});

// router.get('/', function(req, res, next) {
//   db.executeQuery(sql.selectTodos(), (err, rows)=>{
//     if(err){
//       res.render('index');
//     } else {
//       res.render('index', {todos:rows})
//     }
//   })
//   // const todos=[
//   //   {todoId:1, job:'JS Study'},
//   //   {todoId:2, job:'Workout'}
//   // ];
//   // res.render('index', { todos: todos });
// });

module.exports = router;
