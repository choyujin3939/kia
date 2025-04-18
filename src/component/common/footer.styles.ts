import { media } from "@/style/theme";
import { css } from "@emotion/react";

export const footer = css`
  --font-md: 14px;
  --font-lg: 16px;
  --line-height: 24px;

  position: relative;
  background-color: var(--midnight-900);
  color: var(--gray-400);

  .inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 47px var(--side-padding);
    margin: 0 auto;
    max-width: var(--max-width);
    font-size: var(--font-md);
    line-height: var(--line-height);
    position: relative;
  }

  ${media.max.tablet} {
    --font-md: 12px;
    --font-lg: 14px;
    --line-height: 22px;

    .inner {
      flex-direction: column;
      align-items: flex-start;
      gap: 22px;
      padding: 34px var(--side-padding) 44px;
    }
  }

  ${media.max.mobile} {
    .inner {
      padding: 18px var(--side-padding) 29px;
    }
  }
`;
export const copyright = css`
  word-break: break-all;

  .logo {
    display: block;
    height: 56px;
  }

  ${media.min.tablet} {
    order: 1;
  }

  ${media.min.mobile} {
    .logo {
      height: 48px;
    }
  }

  ${media.max.mobile} {
    .logo {
      height: 32px;
    }
  }
`;
export const information = css`
  flex: 1;

  .utils {
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    margin-bottom: 10px;

    button {
      font-size: var(--font-lg);
      line-height: var(--line-height);
      color: #fff;
    }
  }

  .address {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    column-gap: 12px;

    span {
      display: inline-flex;
      column-gap: 4px;
    }

    br {
      display: none;
    }
  }

  ${media.min.tablet} {
    order: 2;
  }

  ${media.max.tablet} {
    .utils {
      justify-content: flex-start;
      gap: 16px;
      margin-bottom: 0;

      button {
        line-height: 52px;
      }
    }

    .address {
      display: block;

      span {
        margin-right: 12px;
      }

      & br:nth-of-type(even):not(:last-of-type) {
        display: block;
      }
    }
  }

  ${media.max.mobile} {
    .utils button {
      line-height: 48px;
    }
    .address {
      & br:not(:last-of-type) {
        display: block;
      }
    }
  }
`;

const footerStyles = {
  footer,
  copyright,
  information,
};

export default footerStyles;
