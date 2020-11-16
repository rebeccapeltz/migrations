require("dotenv").config();
const cloudinary = require("cloudinary").v2;

function upload(video) {
  const upOptions = {
    resource_type: "video",
    raw_convert: 'google_speech:vtt',
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
      "https://webhook.site/afffe591-b948-4414-a18d-cbe14a7f75f7",
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
      "./UnderwritersLaboratoryPsa.mp4",
    publicId: "test-transcribe",
  },
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

videos.forEach((video) => {
  upload(video);
});
