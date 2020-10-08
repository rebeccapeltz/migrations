require("dotenv").config();
const cloudinary = require("cloudinary").v2;

function upload(video) {
  const upOptions = {
    resource_type: "video",
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
      "https://webhook.site/0b500683-d59a-499e-a275-234b14ac7f52",
    public_id: video.publicId,
    invalidate: true,
  };

  console.log("ready to run");
  cloudinary.uploader
    .upload(video.remoteUrl, upOptions)
    .then((result) => {
      console.log(result);
    })
    .then((error) => {
      console.log(error);
    });
}

const videos = [
  {
    remoteUrl:
      "https://cloudinary-res.cloudinary.com/video/upload/v1536879114/canvas-tutorial.mp4",
    publicId: "training/m-tutorial-canvas",
  },
];

videos.forEach((video) => {
  upload(video);
});
