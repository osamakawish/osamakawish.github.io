import "./LeftArrow.css";

type LeftArrowProps = {
  onClick?: () => void;
};

function LeftArrow({ onClick }: LeftArrowProps) {
  return (
    <div onClick={onClick}>
      <svg className="leftArrow-svg">
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
          className="leftArrow"
          points="20,0 0,50 20,100"
          filter="url(#dropshadow)"
        />
      </svg>
    </div>
  );
}

export default LeftArrow;
