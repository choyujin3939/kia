"use client";

import topStyles from "@/component/common/scrollTop.styles";

const ScrollTop = () => {
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div css={topStyles.quick}>
      <div className="inner">
        <button type="button" className="top" onClick={handleClickTop}>
          상단으로
        </button>
      </div>
    </div>
  );
};

export default ScrollTop;
