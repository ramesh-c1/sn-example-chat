if (require.main === module) {
  require('./bin/simple');
} else {
  module.exports = {
    SimpleServer: require('./lib/simple'),
    WorkerServer: require('./lib/worker')
  };
}
