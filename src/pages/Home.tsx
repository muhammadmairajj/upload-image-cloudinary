import React, { FormEvent, useState } from "react";
import "./style.css";

const Home = () => {
  const [profileImage, setProfileImage] = useState<any>("");
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // const upload_preset = process.env.UPLOAD_PRESET;

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setProfileImage(file);
    const createURL: any = URL.createObjectURL(file);
    setPreviewImage(createURL);
  };

  const uploadImage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg")
      ) {
        const image = new FormData();
        image.append('file', profileImage);
        image.append('cloud_name', "dusv5aqjl");
        image.append('upload_preset', "myImages");

        const response = await fetch("https://api.cloudinary.com/v1_1/dusv5aqjl/image/upload", {
          method: "POST",
          body: image
        })

        const imageData = await response.json();
        imageURL = imageData.url.toString();
        setPreviewImage(null);
        console.log(imageURL);
      }
      alert(imageURL);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="container">
        <h2>Upload Image To Cloudinary...</h2>

        <div className="card">
          <form onSubmit={uploadImage} className="form-control" >
            <p>
              <label htmlFor="">Photo:</label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                name="image"
                onChange={handleImageChange}
              />
            </p>
            <p>
              {isLoading ? (
                "Uploading..."
              ) : (
                <button type="submit" className="upload-btn">
                  Upload Image
                </button>
              )}
            </p>
          </form>
          <div className="profile-photo">
            <div>
              {previewImage && (
                <img src={previewImage && previewImage} alt="ProfileImage" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
