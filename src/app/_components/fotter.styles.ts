import { breakpoints, media, theme } from '@/shared/styles/theme';
import { css } from '@emotion/react';

export const styles = {
  footer: css`
    --font-md: 14px;
    --font-lg: 16px;
    --line-height: 24px;

    background-color: var(--midnight-900);
    color: var(--gray-400);

    ${media.max.tablet} {
      --font-md: 12px;
      --font-lg: 14px;
      --line-height: 22px;
    }
  `,

  inner: css`
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

    ${media.max.tablet} {
      flex-direction: column;
      align-items: flex-start;
      gap: 22px;
      padding: 34px var(--side-padding) 44px;
    }

    ${media.max.mobile} {
      padding: 18px var(--side-padding) 29px;
    }
  `,

  copyright: css`
    word-break: break-all;

    ${media.min.tablet} {
      order: 1;
    }
  `,

  logo: css`
    display: block;
    height: 56px;

    ${media.min.mobile} {
      height: 48px;
    }

    ${media.max.mobile} {
      height: 32px;
    }
  `,

  information: css`
    flex: 1;

    ${media.min.tablet} {
      order: 2;
    }
  `,

  utils: css`
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    margin-bottom: 10px;

    button {
      font-size: var(--font-lg);
      line-height: var(--line-height);
      color: #fff;

      ${media.max.tablet} {
        line-height: 52px;
      }

      ${media.max.mobile} {
        line-height: 48px;
      }
    }

    ${media.max.tablet} {
      justify-content: flex-start;
      gap: 16px;
      margin-bottom: 0;
    }
  `,

  address: css`
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

    ${media.max.tablet} {
      display: block;

      span {
        margin-right: 12px;
      }

      & br:nth-of-type(even):not(:last-of-type) {
        display: block;
      }
    }

    ${media.max.mobile} {
      & br:not(:last-of-type) {
        display: block;
      }
    }
  `,
};
