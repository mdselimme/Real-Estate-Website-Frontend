const BannerSlider = () => {
  return (
    <div>
      <div
        id="carousel-5"
        data-carousel='{ "loadingClasses": "opacity-0" }'
        className="relative w-full"
      >
        <div className="carousel h-96">
          <div className="carousel-body h-3/4 opacity-0">
            {/* <!-- Slide 1 --> */}
            <div className="carousel-slide">
              <div className="flex size-full justify-center">
                <img
                  src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png"
                  className="size-full object-cover"
                  alt="mountain"
                />
              </div>
            </div>
            {/* <!-- Slide 2 --> */}
            <div className="carousel-slide">
              <div className="flex size-full justify-center">
                <img
                  src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png"
                  className="size-full object-cover"
                  alt="sand"
                />
              </div>
            </div>
            {/* <!-- Slide 3 --> */}
            <div className="carousel-slide">
              <div className="flex size-full justify-center">
                <img
                  src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png"
                  className="size-full object-cover"
                  alt="cloud"
                />
              </div>
            </div>
          </div>
          <div className="carousel-pagination bg-base-100 bottom-0 z-[1] h-1/4 justify-between gap-2 space-x-0 pt-2 overflow-y-auto">
            <img
              src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png"
              className="carousel-active:opacity-100 grow object-cover opacity-30"
              alt="mountain"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png"
              className="carousel-active:opacity-100 grow object-cover opacity-30"
              alt="sand"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png"
              className="carousel-active:opacity-100 grow object-cover opacity-30"
              alt="cloud"
            />
          </div>
        </div>
        {/* Previous Slide */}
        <button type="button" className="carousel-prev">
          <span className="mb-15" aria-hidden="true">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        {/* Next Slide */}
        <button type="button" className="carousel-next">
          <span className="sr-only">Next</span>
          <span className="mb-15" aria-hidden="true">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
