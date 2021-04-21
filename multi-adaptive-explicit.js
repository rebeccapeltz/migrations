require("dotenv").config();
const cloudinary = require("cloudinary").v2;

function upload(video) {
  const upOptions = {
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
    invalidate: true
  };

  console.log("ready to run");
  cloudinary.uploader
    .explicit("training/mo-tutorial-v3", upOptions)
    .then((result) => {
      console.log(result);
    })
    .then((error) => {
      console.log(error);
    });
}

const videos = [
  // {
  //   remoteUrl:
  //     "https://cloudinary-res.cloudinary.com/video/upload/v1603881991/training/Site_Cartridge_a_Intro.mp4",
  //   publicId: "training/m-tutorial-sf-site-intro",
  // },
  // {
  //   remoteUrl:
  //     "https://cloudinary-res.cloudinary.com/video/upload/v1603882052/training/Site_Cartridge_b_Install_Config.mp4",
  //   publicId: "training/m-tutorial-sf-site-install-config",
  // },
  // {
  //   remoteUrl:
  //     "https://cloudinary-res.cloudinary.com/video/upload/v1603882114/training/Site_Cartridge_c_Modes.mp4",
  //   publicId: "training/m-tutorial-sf-site-modes",
  // },
  // {
  //   remoteUrl:
  //     "https://cloudinary-res.cloudinary.com/video/upload/v1603882244/training/Site_Cartridge_d_Videos.mp4",
  //   publicId: "training/m-tutorial-sf-site-install-video",
  // },
];

// videos.forEach((video) => {
//   upload(video);
// });
console.log(cloudinary.config().cloud_name);
upload({
  remoteUrl: "./mo-tutorial-v3.mp4",
  publicId: "training/m-tutorial-mo-tutorial-v3",
});
