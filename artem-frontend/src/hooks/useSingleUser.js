import { doc, getFirestore } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import firebaseApp from "../firebase-config";

export const useSingleUser = (id) => {
  const [value, loading, error] = useDocument(
    doc(getFirestore(firebaseApp), id ? "users" : "posts", id)
  );
  return id
    ? { user: value?.data(), error, loading }
    : { user: null, error, loading };
};
