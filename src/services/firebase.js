import { ref, get } from "firebase/database";
import { db } from "./firebase";

export const getTeachers = async () => {
  const snapshot = await get(ref(db, "teachers"));
  const data = snapshot.val();

  return data ? Object.entries(data).map(([id, t]) => ({ id, ...t })) : [];
};
