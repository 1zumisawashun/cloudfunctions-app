const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

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
// oncall methods
exports.sayHello = functions.https.onCall((data, context) => {
  const name = data.name;
  return `Hello, ${name}`;
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
  //dataはフロントから送られる情報
  if (!context.auth) {
    //ログインしていなかったら
    throw new functions.https.HttpsError(
      "unauthenticated",
      //error表示のAPIを叩いている。レファレンス有り
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
      shop: data.shop,
      place: data.place,
      upvotes: 0
    });
  //ネストしたcollectionの作り方は？
});

exports.upvote = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    //ログインしていなかったら
    //contet = Authentication dataが入っている
    //data = フロントからの情報（request.idが格納されている）
    throw new functions.https.HttpsError(
      "unauthenticated",
      "only authenticated users can sdd requests"
    );
  }
  //get refs for user doc & request doc
  const user = admin
    .firestore()
    .collection("user")
    .doc(context.auth.uid);
  const request = admin
    .firestore()
    .collection("request")
    .doc(data.id);

  const doc = await user.get();
  //check user hasn't already upvoted the request
  if (doc.data().upvoteOn.includes(data.id)) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "You can only upvote something once"
    );
  }
  //update user array
  await user.update({
    upvoteOn: [...doc.data().upvoteOn, data.id]
    //requestのidが入る
  });
  return request.update({
    upvotes: admin.firestore.FieldValue.increment(1)
  });
});

exports.logActivities = functions.firestore
  .document("/{collection}/{id}")
  .onCreate((snap, context) => {
    console.log(snap.data());
    const collection = context.params.collection;
    const id = context.params.id;
    const activities = admin.firestore().collection("activities");
    if (collection === "request") {
      return activities.add({
        text: "a new tutorial request was added"
      });
    }
    if (collection === "user") {
      return activities.add({
        text: "a new user signed up"
      });
    }
    return null;
  });
