export default function CavingVideo() {
  return (
    <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Wrapper to enforce aspect ratio while being responsive */}
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/zl9o-rCyRHg?si=2_xAQknP_JxKwp_h"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
