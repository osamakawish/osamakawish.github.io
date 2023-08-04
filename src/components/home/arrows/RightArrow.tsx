import "./RightArrow.css";

type RightArrowProps = {
  onClick?: () => void;
};

function RightArrow({ onClick }: RightArrowProps) {
  return (
    <div onClick={onClick}>
      <svg className="rightArrow-svg">
        <polyline className="rightArrow" points="0,0 20,50 0,100" />
      </svg>
    </div>
  );
}

export default RightArrow;
