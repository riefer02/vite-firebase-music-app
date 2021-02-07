import db from "../db/firestore";

export const fetchAudio = () =>
  db
    .collection("audio")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );

export const uploadAudio = () => {
  db.collection("audio")
    .add({
      title: "Boom Boom",
    })
    .then((docRef) => {
      console.log("document written with ID: ", docRef.id);
    })
    .catch((err) => {
      console.error("Shit has hit the fan friend: ", err);
    });
};
