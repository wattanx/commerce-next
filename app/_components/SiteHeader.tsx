export const SiteHeader = () => {
  return (
    <header className={`sticky top-0 z-[99] bg-gray-900 px-0 py-4`}>
      <div className="mx-auto my-0 max-w-[850px] px-6 py-0">
        <div className="flex flex-row items-center justify-between font-bold">
          <div className="flex items-center gap-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="100"
                transform="rotate(-90 100 100)"
                fill="url(#paint0_linear_1889_13)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1889_13"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#52CBFF" />
                  <stop offset="1" stopColor="#182FFD" />
                </linearGradient>
              </defs>
            </svg>

            <a href="/" className="items-center no-underline">
              {' '}
              wattanx
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
