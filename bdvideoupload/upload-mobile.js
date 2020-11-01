require("dotenv").config();
var cloudinary = require("cloudinary").v2;

cloudinary.uploader
  .upload("https://check-n-click.com/test/Cloudinary/Runner-woman01.mp4", {
    resource_type: "video",
    public_id: "runner-woman01-mobile",
    folder: "VideoGallery/eager",
    tags: ["shoes", "woman", "pwg01"],
    type: "upload",
    eager_async: "true",
    notification_url:
      "https://webhook.site/0b500683-d59a-499e-a275-234b14ac7f52",
    allowed_formats: ["mp4"],
    // mobile ar with g_auto
    eager: [
      { raw_transformation: "ar_9:16,w_400,c_fill,f_webm/g_auto" },
      { raw_transformation: "ar_9:16,w_400,c_fill,f_mp4/g_auto" },
      { raw_transformation: "ar_9:16,w_400,c_fill,f_ogg/g_auto" },
    ],
    overwrite: "true", //default
    invalidate: "true", //invalidate any previous
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
