let queue = [];       // { id, text }
let idSeq = 1;
let notify = null;

export function registerNotifier(fn) {
  notify = fn;
}

export function pushToast(text) {
  queue.push({ id: idSeq++, text });
  notify && notify();
}

export function getToasts() {
  return [...queue];
}

export function removeToast(id) {
  queue = queue.filter(t => t.id !== id);
  notify && notify();
}
