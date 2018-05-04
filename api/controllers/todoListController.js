'use strict';

var mongoose = require('mongoose'),
  uuidv1 = require('uuid/v1'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.id = uuidv1();
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findOne({id: req.params.taskId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.increase_a_task_count = function(req, res) {
    Task.findOne({id: req.params.taskId}, function(err, task) {
        if (err)
          res.send(err);
            task.count = task.count + 1;
        task.save(function(err) {
            if (err)
            res.json(err);
            else
            res.json(task);
          });
      });
  };

exports.switch_a_task_enabled = function(req, res) {
  Task.findOne({id: req.params.taskId}, function(err, task) {
    if (err)
      res.send(err);
        task.enabled = !task.enabled;
    task.save(function(err) {
        if (err)
        res.json(err);
        else
        res.json(task);
      });
  });
}


exports.delete_a_task = function(req, res) {

  Task.remove({
    id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};