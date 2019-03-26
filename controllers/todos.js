const knex = require("../db/knex.js");

module.exports = {

    getAllTodos:(req,res)=>{
        knex('todos').then(todos => res.json(todos))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
    
    getTodo:(req,res)=>{
        knex('todos').where('id', req.params.tid).then(todo => res.json(todo))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
  
    postTodo:(req,res)=>{
        knex('todos').insert(req.body)
            .then(()=>{
                knex('todos').then(todos=>res.json(todos))  //getting all todos
            })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
    
    updateTodo(req, res) {
          knex('todos')
            .where('id', req.params.tid)
            .update(req.body)
            .then(()=>{
                knex('todos').where('id', req.params.tid)
                .then(todo => res.json(todo))
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
    },
  
    deleteTodo(req, res) {
          knex('todos')
            .where('id', req.params.tid)
            .del()
            .then(() => {
                knex('todos').then(todos=>res.json(todos))  //getting all todos
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
    }
}