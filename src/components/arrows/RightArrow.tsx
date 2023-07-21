import "./RightArrow.css";

function RightArrow() {
  return (
    <svg className="rightArrow-svg">
      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polyline
        className="rightArrow"
        points="0,0 20,50 0,100"
        filter="url(#dropshadow)"
      />
    </svg>
  );
}

export default RightArrow;
