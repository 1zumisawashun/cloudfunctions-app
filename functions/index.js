const functions = require("firebase-functions");
// http request1
exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  console.log(number);
  response.send(number.toString());
});
// http request2
exports.toTheDojo = functions.https.onRequest((request, response) => {
  response.redirect("https://www.thenetninja.co.uk");
});
exports.sayHello = functions.https.onCall((data, context) => {
  const name = data.name;
  return `Hello, ${name}`;
  // onCallを使う時はreturnで値を返す
});

exports.userDeleted = functions.auth.user().onCreate(user => {
  console.log("user created", user.email, user.uid);
});

exports.newUserSignup = functions.auth.user().onDelete(user => {
  console.log("user deleted", user.email, user.uid);
});
