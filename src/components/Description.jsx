/** @format */

import { useState } from "react";

export function Description({ text, wordLimit = 20 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = typeof text === "string" ? text.split(" ") : [];
  const shouldTruncate = words.length > wordLimit;
  const displayText =
    shouldTruncate && !isExpanded
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;

  return (
    <p className="text-sm font-medium text-gray-600">
      {displayText}{" "}
      {shouldTruncate && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 cursor-pointer font-bold"
        >
          {isExpanded ? "Less" : "more"}
        </span>
      )}
    </p>
  );
}
