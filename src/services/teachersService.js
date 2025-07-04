import { ref, get } from "firebase/database";
import { db } from "./firebase";

export const fetchTeachers = async () => {
  const snapshot = await get(ref(db, "teachers"));
  const data = snapshot.val();

  // if (!data) return [];

  return data
    ? Object.entries(data).map(([id, teacher]) => ({
        id,
        ...teacher,
      }))
    : [];
};
