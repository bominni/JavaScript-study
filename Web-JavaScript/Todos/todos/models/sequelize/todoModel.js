const {DataTypes, Model} = require('sequelize');
const sequelize = require('./index');

class Todo extends Model { };
Todo.init({ // Data 정의
    todoId:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    job:{
        type:DataTypes.STRING
    }
}, {
    sequelize, // Connection
    modelName: 'Todo', // ModelName
    tableName: 'todo', // TableName
    timestamps: false // no createAt, no updateAt
});

module.exports = Todo;