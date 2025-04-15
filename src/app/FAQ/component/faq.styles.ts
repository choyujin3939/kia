import { css } from "@emotion/react";
import { media } from "@/style/theme";

export const styles = {
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
  tabs: css`
    display: flex;
    margin-bottom: var(--px-lg);
  `,
  accordion: css`
    border-top: 2px solid #05141f;
    border-top: 2px solid var(--midnight-900);
  `,
  accordionItem: css`
    border-bottom: 1px solid #e6e8e9;
    border-bottom: 1px solid var(--gray-100);
  `,
  summary: css`
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
      }

      strong {
        margin: 0;
        min-width: 100%;
        padding: 0;
      }
    }
  `,
  details: css`
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
  `,
  more: css`
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
  `,
  download: css`
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
  `,
  processInfo: css`
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
  `,
  appInfoBox: css`
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
  `,
};
