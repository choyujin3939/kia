import { theme } from "@/style/theme";
import { css } from "@emotion/react";

export const styles = {
  header: css`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    height: var(--header-height);
    padding: 0 var(--side-padding);

    ${theme.media.max.tablet} {
      padding-block: 8px;
    }
  `,

  logo: css`
    display: block;
    width: 140px;
    height: 100%;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    ${theme.media.max.tablet} {
      height: 40px;
      width: 110px;
    }
  `,

  nav: css`
    flex: 1;
    height: 100%;

    ${theme.media.min.tablet} {
      & > ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 16px;
        height: 100%;

        > li {
          height: 100%;

          > a {
            display: block;
            padding: 0 4px;
            line-height: var(--header-height);
            height: 100%;
          }
        }
      }
    }

    ${theme.media.max.tablet} {
      position: fixed;
      bottom: 0;
      left: -100%;
      width: 100%;
      height: calc(100% - var(--header-height));
      padding: 80px var(--side-padding) 0;
      background: white;
      transform: translateX(0);
      transition: transform 0.8s var(--cubic-bezier-primary);

      > ul > li > a {
        display: block;
        font-size: 24px;
        font-weight: 600;
        line-height: 56px;
        margin-bottom: 8px;
        text-align: center;
      }

      body.nav-opened & {
        transform: translateX(100%);
      }
    }
  `,

  navButton: css`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 100%;

    ${theme.media.min.tablet} {
      display: none;
    }

    button {
      position: relative;
      width: 40px;
      height: 40px;
      margin-right: -8px;
      font-size: 0;
      background-color: transparent;
      background-image: linear-gradient(transparent 9px, #000 9px, #000 11px, transparent 11px);
      background-repeat: no-repeat;
      background-position: 0;
      border: 10px solid transparent;
      transition: background-position 0.4s var(--cubic-bezier-primary);

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform-origin: 50%;
        transition: transform 0.6s var(--cubic-bezier-primary);
      }

      &::before {
        top: 3px;
      }

      &::after {
        bottom: 3px;
      }

      body.nav-opened & {
        background-position: 30px 0;
      }

      body.nav-opened &::before {
        transform: translateY(6px) rotate(-45deg) scaleX(1.2);
      }

      body.nav-opened &::after {
        transform: translateY(-6px) rotate(45deg) scaleX(1.2);
      }
    }
  `,
};
