'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/activities')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/activities/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/activities/:taskId/increase')
    .get(todoList.increase_a_task_count)

  app.route('/activities/:taskId/switch')
  .get(todoList.switch_a_task_enabled)
};