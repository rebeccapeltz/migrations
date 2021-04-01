jQuery(document).ready(function () {
  jQuery('.fancybox').fancybox();
  // Initialize player
  var cloudinaryCld = cloudinary.Cloudinary.new({ cloud_name: 'cloudinary-marketing' });
  var options = {
    sourceTypes: ["hls", "mp4"],
    bigPlayButton: "init",
    muted: false,
    transformation: {
      audio_frequency: 44100
    },
    sourceTransformation: {
      hls: {audio_frequency: 44100}
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }
  var media = cloudinaryCld.videoPlayer('video', options);
  jQuery(document).on("click", ".fancybox.video-trigger", function () {
    var videoID = jQuery(this).data('video-id');
    var videoPoster = jQuery(this).data('video-poster');
    media.posterOptions({publicId: videoPoster})
    media.source({ publicId: videoID});
  });
});