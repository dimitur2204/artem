import React, { useState } from "react";
import Header from "../components/Header";
import { Container, Typography, Button, Switch, Box, Fab } from "@mui/material";
import { getStorage, ref } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import Add from "@mui/icons-material/Add";
import Input from "../components/global/Input";
import theme from "../theme";
import firebaseApp from "../firebase-config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const storage = getStorage();
const auth = getAuth();
function Create() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isForSale, setForSale] = useState(false);
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [user] = useAuthState(auth);
  const upload = async (document) => {
    if (images) {
      const uploadPromises = Array.from(images).map((img, index) => {
        const storageRef = ref(
          storage,
          `/${document.id}/${index + 1}-${document.id}`
        );
        return uploadFile(storageRef, img, {
          contentType: "image/jpeg",
        });
      });
      await Promise.all(uploadPromises);
    }
  };
  const createDocument = async () => {
    try {
      const doc = await addDoc(collection(getFirestore(firebaseApp), "posts"), {
        title,
        description,
        isForSale,
        authorId: user.uid,
        isFeatured: false,
        category: "paintings",
      });
      await upload(doc);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header text="Publish Creation" withXButton />
      {error && <strong>Error: {error.message}</strong>}
      {uploading && <span>Uploading file...</span>}
      <Box>
        {images &&
          Array.from(images).map((image) => (
            <span>Selected file: {image.name}</span>
          ))}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F7F6F5",
          marginBottom: theme.spacing(4),
          marginTop: theme.spacing(4),
          height: "30vh",
        }}
      >
        <input
          onChange={(e) => {
            setImages(currentImages => currentImages.concat(Array.from(e.target.files)));
          }}
          type="file"
          accept="image/*"
          style={{ visibility: "hidden", width: 0 }}
          name="file_image"
        />
        <Fab
          onClick={() => {
            document.querySelector("input[type='file']").click();
          }}
          tabIndex={-1}
          color="primary"
          aria-label="Upload post image"
          size="large"
          sx={{ color: "white" }}
        >
          <Add />
        </Fab>
      </div>
      <Container>
        <Input
          placeholder="Title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          name="description"
          type="text"
          style={{
            padding: theme.spacing(1),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
            borderRadius: "20px",
          }}
          multiline
          rows={3}
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography>Is your item for sale?</Typography>
            <Switch
              color="primary"
              checked={isForSale}
              onChange={() => setForSale(!isForSale)}
            />
          </Box>
          <Box>
            {" "}
            <Button
              variant="contained"
              size="large"
              disableElevation
              onClick={async () => {
                await createDocument();
              }}
            >
              {" "}
              Post
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Create;
