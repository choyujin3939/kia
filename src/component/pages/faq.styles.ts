import { css } from "@emotion/react";
import { media } from "@/style/theme";

import ArrowIconUrl from "@/asset/images/ic_arrow.svg?url";

export const title = {
  h1: css`
    display: flex;
    flex-direction: column;
    font-size: var(--h1-fsize);
    height: var(--h1-height);
    justify-content: center;
    line-height: 1.4;
    line-height: var(--line-height-sm);

    em {
      font-size: var(--h1-fsize-sm);
      font-weight: 400;
      line-height: 1.6;
      line-height: var(--line-height-md);
      margin-top: 0.4em;
      word-break: keep-all;
    }
  `,
  h2: css`
    font-size: var(--heading-2);
    margin: var(--heading-2-margin);
    line-height: 1.4;
    line-height: var(--line-height-sm);
  `,
};

/* **************************************** *
 * CONTENT
 * **************************************** */
export const loading = css`
  &.indicator {
    flex: 1;
    display: flex;
    min-height: 320px;
    align-items: center;
    justify-content: center;
    font-size: 0;
  }

  &.indicator > i {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    animation: indicator 0.8s linear infinite;
  }

  &.indicator > i:before {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 6px solid var(--gray-200);
    animation: indicator-clipping 1.6s linear infinite alternate;
  }

  @keyframes indicator {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes indicator-clipping {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
  ${media.max.mobile} {
    &.indicator > i {
      width: 32px;
      height: 32px;
    }

    &.indicator > i:before {
      border-width: 4px;
    }
  }

  ${media.between.mobileToLaptop} {
    &.indicator > i {
      width: 40px;
      height: 40px;
    }

    &.indicator > i:before {
      border-width: 5px;
    }
  }
`;
export const accordion = css`
  border-top: 2px solid #05141f;
  border-top: 2px solid var(--midnight-900);

  .accordionItem {
    border-bottom: 1px solid #e6e8e9;
    border-bottom: 1px solid var(--gray-100);
  }

  .summary {
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    font-size: var(--faq-list-a-size);
    line-height: 1.4;
    line-height: var(--line-height-sm);
    overflow: hidden;
    padding: var(--faq-list-a-padding-v) 0;
    padding-right: calc(var(--px-xlg) + 1.6em);
    position: relative;
    width: 100%;

    &.open {
      background-color: var(--gray-10);

      .icon {
        transform: rotate(180deg);
        transform: rotate(180deg);
      }
    }

    em {
      box-sizing: initial;
      color: #697278;
      color: var(--gray-500);
      padding: 0 var(--faq-list-a-padding-h);
      width: 8em;
      font-weight: 400;
      text-align: center;

      ~ em {
        width: 6em;
      }
    }

    strong {
      flex: 1 1;
      padding-left: var(--faq-list-a-padding-h);
      text-align: left;
    }

    .icon {
      content: "";
      height: var(--ic-md);
      position: absolute;
      right: calc((var(--px-xlg) - var(--ic-md)) / 2);
      transition: -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
      transition: transform 0.4s cubic-bezier(1, 0, 0.2, 1);
      transition:
        transform 0.4s cubic-bezier(1, 0, 0.2, 1),
        -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
      transition: -webkit-transform 0.4s var(--cubic-bezier-primary);
      transition: transform 0.4s var(--cubic-bezier-primary);
      transition:
        transform 0.4s var(--cubic-bezier-primary),
        -webkit-transform 0.4s var(--cubic-bezier-primary);
      width: var(--ic-md);

      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    ${media.max.tablet} {
      flex-wrap: wrap;

      em {
        align-items: center;
        display: flex;
        font-size: calc(1em - 4px);
        line-height: 1.6;
        line-height: var(--line-height-md);
        margin: 0 0 4px;
        padding: 0;
        width: auto !important;

        ~ em:before {
          content: "";
          height: 16px;
          margin: 0 4px;
          opacity: 0.3;
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
          width: 16px;
          background: url(${ArrowIconUrl}) no-repeat;
          background-size: auto 100%;
        }
      }

      strong {
        margin: 0;
        min-width: 100%;
        padding: 0;
      }
    }
  }

  .details {
    border-top: 1px solid #e6e8e9;
    border-top: 1px solid var(--gray-100);
    font-size: 1rem !important;
    line-height: 1.8;
    line-height: var(--line-height-lg);
    overflow-x: scroll;
    padding: var(--faq-list-q-padding);

    .inner {
      height: 0;
      overflow: hidden;
      transition: height 0.6s cubic-bezier(1, 0, 0.2, 1);
      transition: height 0.6s var(--cubic-bezier-primary);
    }

    &.open .inner {
      height: auto;
    }
  }
`;
export const moreButton = css`
  align-items: center;
  display: flex;
  font-size: var(--list-more-size);
  height: var(--btn-xlg2);
  justify-content: center;
  margin-top: calc(var(--px-lg) - 8px);
  width: 100%;

  i {
    height: calc(var(--list-more-size) - 4px);
    margin-right: 4px;
    margin-top: -2px;
    position: relative;
    transition: -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
    transition: transform 0.4s cubic-bezier(1, 0, 0.2, 1);
    transition:
      transform 0.4s cubic-bezier(1, 0, 0.2, 1),
      -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
    transition: -webkit-transform 0.4s var(--cubic-bezier-primary);
    transition: transform 0.4s var(--cubic-bezier-primary);
    transition:
      transform 0.4s var(--cubic-bezier-primary),
      -webkit-transform 0.4s var(--cubic-bezier-primary);
    width: calc(var(--list-more-size) - 4px);

    &::before,
    &::after {
      background-color: #05141f;
      background-color: var(--midnight-900);
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      top: calc(50% - 1px);
      width: 100%;
    }

    &::after {
      transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`;
export const downloadSection = css`
  display: flex;
  margin: 0 calc(var(--space-md) * -1 / 2);

  > a {
    flex: 1 1;
    margin: 0 calc(var(--space-md) / 2);
  }

  em {
    color: var(--gray-500);
    display: block;
    font-size: 14px;
    font-weight: 400;
  }

  ${media.between.mobileToTablet} {
    flex-wrap: wrap;

    > a:last-child {
      margin-top: var(--space-md);
      min-width: calc(100% - var(--space-md));
    }
  }

  ${media.max.mobile} {
    flex-direction: column;
    gap: 12px;

    > a {
      justify-content: flex-start;
    }
  }
`;
export const processSection = css`
  counter-reset: li;
  display: flex;
  line-height: 1.4;
  line-height: var(--line-height-sm);
  margin: 0 calc(var(--space-md) * -1 / 2);

  li {
    flex: 1 1;
    margin: 0 calc(var(--space-md) / 2);
    padding: 0 0 0 24px;
  }

  strong {
    display: block;
    font-size: 18px;
  }

  em {
    color: #37434c;
    color: var(--gray-700);
    display: block;
    font-size: 16px;
    margin-top: 8px;
  }

  .ic {
    display: block;
    height: var(--ic-xlg);
    margin-bottom: 8px;
    width: var(--ic-xlg);
  }

  .detail {
    position: relative;

    i {
      height: 24px;
      left: -36px;
      position: absolute;
      top: 0;
      width: 24px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${media.between.mobileToTablet} {
    .ic {
      margin: 0 16px 0 0;
    }
  }

  ${media.max.tablet} {
    flex-direction: column;
    gap: 24px;

    li {
      display: flex;
      padding: 0 !important;
    }

    .detail i {
      display: none;
    }
  }

  ${media.max.mobile} {
    strong {
      font-size: 16px;
    }

    em {
      font-size: 14px;
      margin-top: 4px;
    }

    .ic {
      margin: 0 12px 0 0;
    }
  }
`;
export const appSection = css`
  background-color: var(--gray-10);
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 48px;
  overflow: hidden;
  padding: 32px;

  h2 {
    font-size: 24px;
    line-height: 1.4;
    line-height: var(--line-height-sm);
    margin-bottom: 24px;
    text-align: center;
    width: 100%;
  }

  a {
    align-items: center;
    background: #fff;
    border-radius: 8px;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 60px;
    justify-content: center;
    margin: 0 8px;
    width: 296px;
  }

  i {
    height: 28px;
    margin-right: 4px;
    width: 28px;
  }

  ${media.between.mobileToTablet} {
    h2 {
      font-size: 20px;
      margin-bottom: 24px;
    }

    a {
      font-size: 14px;
      height: 56px;
      width: 264px;
    }
  }

  ${media.max.mobile} {
    h2 {
      font-size: 16px;
      margin-bottom: 4px;
    }

    a {
      font-size: 14px;
      height: 48px;
      margin: 12px 0 0;
      max-width: 264px;
      width: 100%;
    }
  }
`;

const faqStyle = {
  loading,
  appSection,
  downloadSection,
  processSection,
  title,
};

export default faqStyle;
