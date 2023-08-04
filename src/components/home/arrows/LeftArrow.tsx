import "./LeftArrow.css";

type LeftArrowProps = {
  onClick?: () => void;
};

function LeftArrow({ onClick }: LeftArrowProps) {
  return (
    <div onClick={onClick}>
      <svg className="leftArrow-svg">
        <polyline className="leftArrow" points="20,0 2,50 20,100" />
      </svg>
    </div>
  );
}

export default LeftArrow;
