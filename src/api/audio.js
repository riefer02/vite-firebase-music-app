import db from "../db/firestore";

export const fetchAudio = () =>
  db
    .collection("audio")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
