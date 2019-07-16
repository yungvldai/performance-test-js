class Timing {
  constructor(comment) {
    this.comment = comment;
    this.begin = performance.now();
  }

  stop() {
    this.end = performance.now();
    console.log(`%c Performance test [${this.comment}]: ${this.end - this.begin} ms.`, 'background: #FF0000; color: #FFFFFF');
  }
}

let instances = [];

function _start(comment, id) {
  instances.push({
    id,
    payload: new Timing(comment)
  });
}

function _stop(id) {
  let index = instances.findIndex(x => x.id === id);
  instances[index].payload.stop();
  instances.splice(index, 1);
}

window._start = _start;
window._stop = _stop;
