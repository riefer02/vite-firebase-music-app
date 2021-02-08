import db from "../db/firestore";
import { audioRef } from "../db/references";

export const fetchAudio = () =>
  db
    .collection("audio")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );

export const uploadToFirebase = () => {
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

export const uploadToStorage = async (file) => {
  const metadata = {
    randomMeta: "This is random meta data",
  };
  console.log(metadata);
  const audioFileRef = audioRef.child(file.name);
  await audioFileRef.put(file, metadata).then((snapshot) => {
    snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log("File available at", downloadURL);
    });
  });
};
