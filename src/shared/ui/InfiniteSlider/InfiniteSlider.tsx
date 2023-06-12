import React, { useCallback } from "react";
import "./InfiniteSlider.css";

interface PropsInfiniteSlider {
  selectIndex: number;
  items: string[];
  onClick: (select: number) => void;
}

const InfiniteSlider: React.FC<PropsInfiniteSlider> = ({
  items,
  selectIndex,
  onClick,
}) => {
  const itemsCount = items.length;

  const handleClick = useCallback(
    (index: number) => {
      onClick(index);
    },
    [onClick]
  );
  const handlePrev = useCallback(() => {
    onClick((selectIndex - 1 + itemsCount) % itemsCount);
  }, [onClick, selectIndex, itemsCount]);
  const handleNext = useCallback(() => {
    onClick((selectIndex + 1) % itemsCount);
  }, [onClick, selectIndex, itemsCount]);

  return (
    <div className="infinite-slider-container">
      <button className="infinite-slider-button" onClick={handlePrev}>
        {"<"}
      </button>
      <div className="infinite-slider-scroll">
        {items.map((item, index) => (
          <button
            key={`${index}-${item}`}
            className={`infinite-slider-item ${
              index === selectIndex ? "infinite-slider-item-active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="infinite-slider-button" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};
export default React.memo(InfiniteSlider);
