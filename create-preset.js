require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const upOptions = {
  resource_type: "video",
  eager: [
    {"raw_transformation": "af_44100,f_webm,vc_vp9,q_auto:best/mp4" },
     {"raw_transformation": "af_44100,f_mp4,vc_h265,q_auto:best/mp4"},
  { "raw_transformation": "af_44100,f_mp4,vc_h264,q_auto:best/mp4" }
 
  ],
  eager_async: true,
  eager_notification_url:
    "https://webhook.site/60799e73-a1c2-4760-b23e-46ad7dc55fbb",
  public_id: "test",
  invalidate: true,
};
console.log("ready to run");
cloudinary.uploader
  .upload(
    "https://cloudinary-training.github.io/cld-advanced-concepts/assets/video/close-up-stop.mp4",
    upOptions
  )
  .then((result) => {
    console.log(result);
  })
  .then((error) => {
    console.log(error);
  });
  // {"raw_transformation": "af_44100,f_mp4,vc_h265,q_auto:best/mp4"},
  // { "raw_transformation": "af_44100,f_mp4,vc_h264,q_auto:best/mp4" }