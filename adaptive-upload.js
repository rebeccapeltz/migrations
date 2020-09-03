require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const upOptions = {
  resource_type: "video",
  eager: [
    { format: "mp4", transformation: [{border: "15px_solid_black", "audio_frequency": 44100}]},
    { format: "webm", transformation: [{border: "15px_solid_black", "audio_frequency": 44100},{"video_codec": "vp9"}]},
    { format: "mp4", transformation: [{border: "15px_solid_black", "audio_frequency": 44100},{"video_codec": "h265"}]},
    { format: "m3u8", transformation: [{border: "15px_solid_black", "audio_frequency": 44100}]},
  ],
  eager_async: true,
  eager_notification_url:
    "https://webhook.site/3d2934aa-9483-471e-b79c-273ba13b39c8",
  public_id: "earth",
  invalidate: true,
};
// "https://cloudinary-res.cloudinary.com/video/upload/v1597271505/training/ct.mp4",
// https://cloudinary-training.github.io/cld-advanced-concepts/assets/video/close-up-stop.mp4"

console.log("ready to run");
cloudinary.uploader
  .upload(
    "video.mp4",
    upOptions
  )
  .then((result) => {
    console.log(result);
  })
  .then((error) => {
    console.log(error);
  });

// {videoplayer:id=media}
// {
//   "publicId": "Training/Media_Library_Final",
//   "muted": false,
//   "transformation": {
//     "border": "15px_solid_black",
//     "audio_frequency": 44100
//   },
//   "adaptive": true,
//   "sourceTransformation": {
//     "hls": {"border": "15px_solid_black", "audio_frequency": 44100}
//   },
//   "playerWidth": "800px",
//   "cloudName": "orlyborly",
//   "posterOptions": { "publicId": "Training/Media_Library_Final", "format":"jpg", "resource_type": "video", "transformation": { "border": "15px_solid_black" } },
// }
