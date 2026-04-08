import "./dotLoader.css";

export const DotLoader = () => {
  return (
    <div className="progress-bar" role="status" aria-label="Loading">
      <svg width="100%" height="4" focusable="false" aria-hidden="true">
        <defs>
          <pattern
            id="progress-bar-pattern"
            x="4"
            y="0"
            width="8"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#progress-bar-pattern)" />
      </svg>
    </div>
  );
};
