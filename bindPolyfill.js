Function.prototype.myBind = function (thisArg, ...argArray) {
  const ori = this;
  return function (...args) {
    return ori.call(thisArg, ...argArray, ...args)
  }
}
