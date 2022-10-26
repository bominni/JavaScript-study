const express = require('express');
const router = express.Router();
const tododb = require('../../models/mariadb/todo');
// const db = require('../../models/sqlite/db');
// const sql = require('../../models/sqlite/todo-sql');

// 할 일 리스트 조회
router.get('/', async (req, res)=>{
    const rows = await tododb.selectTodos();
    res.json(rows);
});

// 할 일 추가
router.post('/', async (req, res)=>{
    const {job} = req. body;
    const result = await tododb.insertTodo(job);
    console.log(result);
    if(result && result.affectedRowos==1) res.json({result:'ok'});
    else res.json({result:'ng'});
});

// 할 일 삭제
router.delete('/:todoId', async (req, res)=>{
    const todoId = req.params.todoId;
    const result = await tododb.deleteTodo(todoId);
    console.log(result);
    if(result && result.affectedRowos==1) res.json({result:'ok'});
    else res.json({result: 'ng'});
});

// // 할 일 리스트 조회
// router.get('/', (req, res) => {
//     db.executeQuery(sql.selectTodos(), (err, rows)=>{
//         if(err){ res.end();}
//         else{ res.json(rows);}
//     });
//     // const todos=[
//     //     {todoId:1, job:'JS Study'},
//     //     {todoId:2, job:'Workout'}
//     // ];
//     // res.json(todos);
// });

// // 할 일 추가
// router.post('/', (req, res) => {
//     const {job} = req.body;
//     db.executeUpdate(sql.insertTodo(job));
//     res.json({result:'ok'});
// });

// // 할 일 삭제
// router.delete('/:todoId', (req, res)=> {
//     const todoId = req.params.todoId;
//     db.executeUpdate(sql.deleteTodo(todoId))
//     res.json({result:'ok'});
// });
module.exports=router;