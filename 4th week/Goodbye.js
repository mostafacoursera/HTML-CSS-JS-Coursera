(function (window) {
var Goodbye = {};
var Message_Goodbye = "Good Bye";
Goodbye.speak = function (name) {
  console.log(Message_Goodbye + " " + name);
}
window.Goodbye = Goodbye;
})(window);
