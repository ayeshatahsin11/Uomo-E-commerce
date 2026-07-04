const StarRating = ({
  rating = 0,
  maxStars = 5,
  size = 20,
  activeColor = "#EEBA36",
  inactiveColor = "#E0E0E0",
}) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }).map((_, index) => {
        // প্রতিটা star-এর জন্য fill percentage বের করা (0 থেকে 100)
        const fillPercent = Math.min(Math.max(rating - index, 0), 1) * 100;

        return (
          <div
            key={index}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Background: সবসময় inactive color */}
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={inactiveColor}
              className="absolute top-0 left-0"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>

            {/* Foreground: active color, percentage অনুযায়ী clip করা */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%`, height: size }}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={activeColor}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;