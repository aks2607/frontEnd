Function.prototype.myApply = function (thisArg, argArray=[]) {
  return this.call( thisArg, ...argArray);
  //throw 'Not implemented!';
};
