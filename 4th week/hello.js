(function (window) {
var Hello = {};
var Message_Hello = "Hello";
Hello.speak = function (name) {
  console.log(Message_Hello + " " + name);
}
window.Hello = Hello;
})(window);
