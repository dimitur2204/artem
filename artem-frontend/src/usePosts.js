import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "./firebase-config";

const storage = getStorage(firebaseApp);
export const usePosts = (query) => {
    const [value] = useCollection(query);
    const [postsWithImg, setPostsWithImage] = useState([]);
    const fetchData = useCallback(async (postCollection) => {
      if (!postCollection) return;
      const posts = await Promise.all(
        postCollection?.docs?.map((snapshot) => {
          const doc = snapshot.data();
          return getDownloadURL(
            ref(storage, `/${snapshot.id}/1-${snapshot.id}`)
          ).then((url) => {
            return { ...doc, id: snapshot.id, url };
          });
        })
      );
      return posts;
    }, []);
    useEffect(() => {
      fetchData(value).then((res) => {
        setPostsWithImage(res);
      });
    }, [value, fetchData]);
    return postsWithImg
}