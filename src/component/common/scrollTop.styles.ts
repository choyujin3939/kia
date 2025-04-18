import { media } from "@/style/theme";
import { css } from "@emotion/react";

import TopIconUrl from "@/asset/images/ic_top.svg?url";
export const quick = css`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: sticky;
  width: 100%;
  z-index: 99;

  body:not(.isScroll) & {
    .top {
      width: 0;
      height: 0;
      margin: 0;
      background-position: 50% 100%;
      opacity: 0;
      transition-property: width, height, margin, background-position, opacity;
      transition-duration: 0.4s;
      transition-timing-function: var(--cubic-bezier-primary);
    }
  }

  .inner {
    --size: 56px;
    align-items: center;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 32px;
    -webkit-transform: scale3d(1);
    transform: scale3d(1);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    width: var(--size);
  }

  .top {
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28px;
    background-image: url(${TopIconUrl});
    border-radius: 50%;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    font-size: 0;
    height: var(--size);
    margin-top: 8px;
    opacity: 1;
    pointer-events: all;
    position: relative;
    transition-duration: 0.4s;
    transition-property: width, height, margin, background-position, opacity;
    transition-timing-function: cubic-bezier(1, 0, 0.2, 1);
    transition-timing-function: var(--cubic-bezier-primary);
    width: var(--size);
  }

  ${media.max.mobile} {
    .quick-util > .inner {
      right: 16px;
      bottom: 24px;
      --size: 40px;
    }

    .quick-util > .inner > button {
      background-size: 20px;
    }
  }

  ${media.between.mobileToTablet} {
    .inner {
      right: 24px;
      bottom: 32px;
      --size: 48px;

      button {
        background-size: 24px;
      }
    }
  }

  ${media.between.tabletToLaptop} {
    .inner {
      right: 24px;
      bottom: 32px;
    }
  }
`;

const topStyles = {
  quick,
};

export default topStyles;
