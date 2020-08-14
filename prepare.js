require('dotenv').config()
const cloudinary = require('cloudinary').v2

// create dash/vp9 (chrome/ff), hls/h265(apple), hls/h264 (universal) custom profiles
const upOptions = {
  resource_type: 'video',
  eager: [
    { streaming_profile: 'training_hd_vp9', format: 'mpd' },
    { streaming_profile: 'training_hd_h264', format: 'm3u8' },
    { streaming_profile: 'training_hd_h265', format: 'm3u8' }
  ],
  eager_async: true,
  eager_notification_url:
    'https://webhook.site/60799e73-a1c2-4760-b23e-46ad7dc55fbb',
  public_id: 'whale',
  invalidate: true
}
cloudinary.uploader
  .upload('./video.mp4', upOptions)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
