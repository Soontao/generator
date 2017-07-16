'use strict'

var exec = require('child_process').exec
var kill = require('tree-kill')
var net = require('net')
var utils = require('./utils')

module.exports = AppRunner

function AppRunner (dir) {
  this.child = null
  this.dir = dir
  this.host = '127.0.0.1'
  this.port = 3000
}

AppRunner.prototype.address = function address () {
  return { port: this.port }
}

AppRunner.prototype.start = function start (callback) {
  var env = utils.childEnvironment()
  var host = this.host
  var port = this.port

  env.PORT = String(port)

  this.child = exec('npm start', {
    cwd: this.dir,
    env: env
  })

  function tryConnect () {
    var socket = net.connect(port, host)

    socket.on('connect', function onConnect () {
      socket.end()
      callback(null)
    })

    socket.on('error', function onError (err) {
      socket.destroy()

      if (err.syscall !== 'connect') {
        return callback(err)
      }

      setImmediate(tryConnect)
    })
  }

  setImmediate(tryConnect)
}

AppRunner.prototype.stop = function stop (callback) {
  if (this.child) {
    kill(this.child.pid, 'SIGTERM', callback)
  } else {
    setImmediate(callback)
  }
}
