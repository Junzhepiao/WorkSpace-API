const users = require("../controllers/users.js")
const todos = require("../controllers/todos.js")
const chats = require("../controllers/chats.js")
const events = require("../controllers/events.js")
const requests = require("../controllers/requests.js")

module.exports = function(app){
    //users
    app.get('/users', users.getAllUser);
    app.get('/user', users.login);
    app.post('/user', users.register);
    app.get('/user/:uid', users.getUser);
    app.patch('/user/:uid', users.updateUser); 
    app.delete('/user/:uid', users.deleteUser); 
    //todos
    app.get('/todos', todos.getAllTodos);
    app.get('/todo/:tid', todos.getTodo);
    app.post('/todo', todos.postTodo);
    app.patch('/todo/:tid', todos.updateTodo); 
    app.delete('/todo/:tid', todos.deleteTodo); 
    //chats
    app.get('/chats', chats.getAllChats);
    app.get('/chat/:cid', chats.getChat);
    app.post('/chat', chats.postChat);
    //events
    app.get('/events', events.getAllEvents);
    app.get('/event/:eid', events.getEvent);
    app.post('/event', events.postEvent);
    app.delete('/event/:eid', events.deleteEvent);
    //requests
    app.get('/requests', requests.getAllRequests);
    app.get('/request/:rid', requests.getRequest);
    app.patch('/request/:rid', requests.approveRequest); 
    app.post('/request', requests.postRequest);
    app.delete('/request/:rid', requests.denyRequest);

}

