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
  eager_notification_url:
    "https://webhook.site/2d13ff62-ec06-4495-925f-f2e2ddfbb409",
  type: "upload",
  invalidate: true,
};

cloudinary.uploader.explicit(
  "podcast/mx_matters/mx-matters-episode1-2-ariel",
  upOptions,
  function (error, result) {
    if (error) console.log("error", error);
    else console.log(result);
  }
);
