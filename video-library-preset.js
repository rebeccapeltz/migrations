require("dotenv").config();
const cloudinary = require("cloudinary").v2;

console.log("create preset", cloudinary.config().cloud_name);

cloudinary.api
  .create_upload_preset({
    name: "video-library-preset",
    use_filename: true,
    unique_filename: false,
    unsigned: false,
    folder: "training",
    resource_type: "video",
    type: "upload",
    eager: [
      {
        format: "mp4",
        transformation: [
          { border: "15px_solid_black", audio_frequency: 44100 },
        ],
      },
      {
        format: "webm",
        transformation: [
          { border: "15px_solid_black", audio_frequency: 44100 },
          { video_codec: "vp9" },
        ],
      },
      {
        format: "mp4",
        transformation: [
          { border: "15px_solid_black", audio_frequency: 44100 },
          { video_codec: "h265" },
        ],
      },
      {
        format: "m3u8",
        transformation: [
          { border: "15px_solid_black", audio_frequency: 44100 },
        ],
      },
    ],
    eager_async: true,
    eager_notification_url:
      "https://webhook.site/20d13ebe-105c-4f04-9719-7e1e55f6ad94",
    invalidate: true,
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));
