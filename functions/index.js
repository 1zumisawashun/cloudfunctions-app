const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
//change region
exports.changeRegion = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    console.log("hello tokyo reagion");
  });
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

exports.newUserSignup = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("user")
    .doc(user.uid)
    .set({
      email: user.email,
      upvoteOn: []
    });
});

exports.userDeleted = functions.auth.user().onDelete(user => {
  const doc = admin
    .firestore()
    .collection("user")
    .doc(user.uid);
  return doc.delete();
});

exports.addRequest = functions.https.onCall((data, context) => {
  if (!context.auth) {
    //ログインしていなかったら
    throw new functions.https.HttpsError(
      "unauthenticated",
      "only authenticated users can sdd requests"
    );
  }
  if (data.text.length > 30) {
    //30文字以上だったら
    throw new functions.https.HttpsError(
      "invalid-argument",
      "request must be no more than 30 characters long"
    );
  }
  //onCallはreturnをする
  return admin
    .firestore()
    .collection("request")
    .add({
      text: data.text,
      upvotes: 0
    });
});
