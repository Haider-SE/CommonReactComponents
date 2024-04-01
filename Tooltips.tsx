import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
interface Props {
  tooltipText: string;
}
export default function Tooltips({ tooltipText }: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);
  const isTextLong = tooltipText.length > 100; // Set the length you consider too long
  let displayText = tooltipText;
  if (!isExpanded && isTextLong) {
    displayText = `${tooltipText.substring(0, 100)}...`; // Truncate the text
  }
  return (
    <>
      <Tooltip title={<h3>{tooltipText}</h3>} placement="top">
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {displayText}
        </div>
      </Tooltip>
      {isTextLong && (
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={toggleIsExpanded}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
      )}
    </>
  );
}
