import { storage } from "./firestore";

export const storageRef = storage.ref();

export const audioRef = storageRef.child("audio");
