(function (window) {
var Goodbye = {};
var Message = "Good Bye";
Goodbye.speak = function (name) {
  console.log(Message + " " + name);
}
window.Goodbye = Goodbye;
})(window);
