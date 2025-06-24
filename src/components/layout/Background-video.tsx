export function BackgroundVideo() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/video/bg_video_1.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1/2 pointer-events-none bg-gradient-to-t from-blue-400/20 
      via-transparent to-transparent blur-2xl opacity-70" />
    </>
  );
}
