import { media } from "@/style/theme";
import { css } from "@emotion/react";
import CloseIconUrl from "@/asset/images/ic_close.svg?url";
import ArrowIconUrl from "@/asset/images/ic_arrow.svg?url";
export const dialogStyles = css`
  max-width: calc(100% - var(--side-padding) * 2);
  max-height: calc(100% - var(--side-padding) * 2);
  min-width: 320px;
  visibility: visible;
  background: #fff;
  border: none;
  border-radius: 0;
  inset: 0;
  margin: auto;
  transform: translate3d(0, 0, 0);
  animation: dialog-show 0.4s cubic-bezier(0.4, 2, 0.6, 1);

  &[closing] {
    animation: dialog-close 0.3s cubic-bezier(0.4, 0, 0.6, -1);
    animation-fill-mode: both;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }

  &:not([closing])::backdrop {
    animation: dialog-backdrop-show 0.4s;
  }

  &[closing]::backdrop {
    animation: dialog-backdrop-close 0.3s;
    animation-fill-mode: both;
  }

  .dialog-wrapper {
    --padding: 32px;
    padding: 0 var(--padding);
  }

  .dialog-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 16px;
    border-bottom: 2px solid var(--midnight-900);
  }

  .dialog-header > h4 {
    flex: 1;
    font-size: 20px;
    margin: 0.4em 1em 0.4em 0;
  }

  .dialog-header > .close {
    box-sizing: content-box;
    width: 24px;
    height: 24px;
    margin-right: -16px;
    padding: 16px;
    font-size: 0;
    background: url(${CloseIconUrl}) no-repeat 50%;
    background-size: auto 24px;
    outline: none;
  }

  .dialog-body {
    --padding-top: 12px;
    padding: var(--padding-top) 0 var(--padding);

    select {
      background-image: url(${ArrowIconUrl});
    }
  }

  .dialog-wrapper.dialog-policy {
    display: flex;
    flex-direction: column;
    width: 960px;
    height: 100%;
  }

  .dialog-policy .dialog-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .dialog-policy iframe {
    flex: 1;
    min-height: 0;
  }

  .dialog-policy .policy-top {
    margin-bottom: var(--padding-top);
    text-align: right;
  }

  ${media.max.tablet} {
    .dialog-wrapper {
      --padding: 20px;
      width: auto !important;
    }

    .dialog-header {
      padding-top: 4px;
    }

    .dialog-header > h4 {
      font-size: 16px;
    }

    .dialog-policy .policy-top > select {
      width: 100%;
    }
  }

  ${media.between.tabletToLaptop} {
    .dialog-header > .close {
      width: 28px;
      height: 28px;
      background-size: auto 28px;
    }
  }

  ${media.min.laptop} {
    .dialog-wrapper {
      --padding: 40px;
    }

    .dialog-header > h4 {
      font-size: 24px;
    }

    .dialog-header > .close {
      width: 32px;
      height: 32px;
      background-size: auto 32px;
    }

    .dialog-body {
      --padding-top: 16px;
    }
  }

  .dialog-policy .policy-top + div {
    flex: 1;
    overflow-y: auto;
  }

  @media (hover: hover) and (pointer: fine) {
    .dialog-policy .policy-top + div {
      padding-right: 8px;
    }
  }

  .dialog-policy .policy-top + div * {
    font-size: 12px !important;
    line-height: var(--line-height-sm) !important;
    text-indent: 0 !important;
    word-break: break-all !important;
  }

  .dialog-policy .policy-top + div p {
    margin-bottom: 8px;
  }

  .dialog-policy .policy-top + div table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
  }

  .dialog-policy .policy-top + div table * {
    font-size: 10px !important;
  }

  .dialog-policy .policy-top + div th,
  .dialog-policy .policy-top + div td {
    padding: 4px;
    border: 1px solid var(--gray-100);
  }

  @media (min-width: 744px) and (max-width: 1439px) {
    .dialog-policy .policy-top + div *,
    .dialog-policy .policy-top + div table * {
      font-size: 14px !important;
    }
  }
  @media (min-width: 1440px) {
    .dialog-policy .policy-top + div *,
    .dialog-policy .policy-top + div table * {
      font-size: 16px !important;
    }
  }

  @keyframes dialog-show {
    from {
      transform: translateY(-16px);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes dialog-close {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(-16px);
      opacity: 0;
    }
  }
  @keyframes dialog-backdrop-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes dialog-backdrop-close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default dialogStyles;
