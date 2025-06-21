export function BackgroundVideo() {
  return (
    <div className="">
      <video className="absolute top-0 left-0 w-full h-full object-cover" 
      src="/assets/video/bg_video.mp4" autoPlay loop muted  />
    </div>
  )
}