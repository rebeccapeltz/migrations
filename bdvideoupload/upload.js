require("dotenv").config();
var cloudinary = require("cloudinary").v2;

cloudinary.uploader
  .upload("https://check-n-click.com/test/Cloudinary/Runner-woman01.mp4", {
    resource_type: "video",
    public_id: "runner-woman01",
    folder: "VideoGallery/eager",
    tags: ["shoes", "woman", "pwg01"],
    type: "upload",
    eager_async: "true",
    notification_url:
      "https://webhook.site/0b500683-d59a-499e-a275-234b14ac7f52",
    allowed_formats: ["mp4"],
    //transformations for 1080p video output
    eager: [
      { raw_transformation: "w_1920,h_1080,c_fill,f_webm" },
      { raw_transformation: "w_1920,h_1080,c_fill,f_mp4" },
      { raw_transformation: "w_1920,h_1080,c_fill,f_ogg" }
    ],
    overwrite: "true", //default
    invalidate: "true", //invalidate cache
  })
  .then((result) => {
    console.log(result);
    console.log(
      cloudinary.video("VideoGallery/Moderation/Runner-woman01", {
        controls: "true",
      })
    );
  })
  .catch((error) => console.log(error));
