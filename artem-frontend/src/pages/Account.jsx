import { Avatar, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ImageList from "../components/global/ImageList";
import theme from "../theme";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase-config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export default function Account() {
  const [followed, setFollowed] = React.useState(false);
  const [user] = useAuthState(auth);
  const [value] = useCollection(
    query(collection(getFirestore(firebaseApp), "posts"),
    where("authorId", "==", user.uid))
  );
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
  return (
    <>
      <Header text="My exhibition" withAccountOptions />
      {/* container containing the infromation of a user (img/name/intro/SoMe) */}
      <Container
        style={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3) }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <Avatar
              sx={{ width: 90, height: 90 }}
              src={user.photoURL}
              alt={`${user.displayName}'s profile pic`}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1rem",
            }}
          >
            <div>
              <Typography fontSize="1.5rem">
                {user.displayName || user.email}
              </Typography>
            </div>

            {/* social media icons  */}
            <div>
              <IconButton
                href="https://www.linkedin.com/in/katerina-kolarova-b4549514a/"
                style={{ color: "#000" }}
                target="_blank"
                aria-label="linkedin page"
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                href="https://www.instagram.com/_chaos_is_my_middle_name/"
                style={{ color: "#000" }}
                target="_blank"
                aria-label="instagram page"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                href={`mailto:${user.email}`}
                style={{ color: "#000" }}
                target="_blank"
                aria-label="email"
              >
                <AlternateEmailIcon />
              </IconButton>
            </div>
            <div>
              <Button
                variant={followed ? "outlined" : "contained"}
                onClick={() => setFollowed(!followed)}
                disableElevation
              >
                {" "}
                {followed ? "Unfollow" : "Follow"}
              </Button>
            </div>
          </div>
        </div>

        {/* an introduction of a user */}
        <Typography style={{ marginTop: "1.5rem" }}>
          📍A freelance copywriter based in Aalborg.
        </Typography>
        <Typography>
          🎨There are no mistakes in art, just happy little accidents.
        </Typography>
        <Typography>🤤 Hungry for visuals.</Typography>
      </Container>
      {postsWithImg?.length ? <ImageList posts={postsWithImg} count="5.6k" /> : "No posts for this user yet"}
    </>
  );
}
