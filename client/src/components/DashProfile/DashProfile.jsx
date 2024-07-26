import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../Firebase/Firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);

  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async () => {
    /* // Craft rules based on data in your Firestore database
          // allow write: if firestore.get(
          //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
          service firebase.storage {
            match /b/{bucket}/o {
              match /{allPaths=**} {
                allow read;
                allow write: if 
                request.resource.size < 2 * 1024 * 1024 &&
                request.resource.contentType.matches('image/.*')
              }
            }
          }*/
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          /*setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUploading(false);*/
        });
      }
    );
  };
  return (
    <div className="flex-7 flex justify-center ">
      <div className="flex flex-col p-3  items-center max-w-[500px]">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <form className="flex flex-col items-center w-[300px] gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={filePickerRef}
            hidden
          />
          <div
            className=" relative w-40 h-40 self-center shadow-md overflow-hidden cursor-pointer rounded-full "
            onClick={() => filePickerRef.current.click()}
          >
            {imageFileUploadProgress && (
              <CircularProgressbar
                value={imageFileUploadProgress || 0}
                text={`${imageFileUploadProgress}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${
                      imageFileUploadProgress / 100
                    })`,
                  },
                }}
              />
            )}
            <img
              src={imageFileUrl || currentUser.profilePicture}
              alt="user"
              className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
                imageFileUploadProgress &&
                imageFileUploadProgress < 100 &&
                "opacity-60"
              }`}
            />
          </div>
          {imageFileUploadError && (
            <Alert color="failure">{imageFileUploadError}</Alert>
          )}
          <input
            type="text"
            id="username"
            placeholder="username"
            defaultValue={currentUser.username}
            className="mt-3 bg-gray-100 dark:text-gray-400 rounded-full w-full"
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            defaultValue={currentUser.email}
            className="mt-3 bg-gray-100 dark:text-gray-400 rounded-full w-full"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="mt-3 bg-gray-100 dark:text-gray-400 rounded-full w-full"
          />
          <button
            type="submit"
            className="bg-indigo-600 rounded-full mt-3 w-full p-[8px] text-white"
          >
            Update
          </button>
        </form>
        <div className="flex justify-between w-full mt-4">
          <span className="text-red-500 cursor-pointer">Delete Account</span>
          <span className="text-red-500 cursor-pointer">Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
