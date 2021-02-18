require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const upOptions = {
  resource_type: "video",
  eager: [
    {
      format: "mp4",
      transformation: [{ audio_frequency: 44100 }],
    },
    {
      format: "webm",
      transformation: [{ audio_frequency: 44100 }, { video_codec: "vp9" }],
    },
    {
      format: "mp4",
      transformation: [{ audio_frequency: 44100 }, { video_codec: "h265" }],
    },
    {
      format: "m3u8",
      transformation: [{ audio_frequency: 44100 }],
    },
  ],
  eager_async: true,
  eager_notification_url: "https://webhook.site/2d13ff62-ec06-4495-925f-f2e2ddfbb409",
  public_id: "video-test",
  invalidate: true,
};

cloudinary.uploader
  .upload("./video.mp4", upOptions)
  .then((result) => {
    console.log(result);
  })
  .then((error) => {
    console.log(error);
  });
