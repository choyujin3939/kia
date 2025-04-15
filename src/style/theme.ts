export const breakpoints = {
  mobile: 743, // ~743px
  tablet: 1024, // ~1024px
  laptop: 1440, // ~1440px
  desktop: 1660, // ~1660px
};

export const media = {
  max: {
    mobile: `@media (max-width: ${breakpoints.mobile}px)`, // 최대 743px
    tablet: `@media (max-width: ${breakpoints.tablet}px)`, // 최대 1024px
    laptop: `@media (max-width: ${breakpoints.laptop}px)`, // 최대 1440px
    desktop: `@media (max-width: ${breakpoints.desktop}px)`, // 최대 1660px
  },
  min: {
    mobile: `@media (min-width: ${breakpoints.mobile + 1}px)`, // 744px 이상
    tablet: `@media (min-width: ${breakpoints.tablet + 1}px)`, // 1025px 이상
    laptop: `@media (min-width: ${breakpoints.laptop + 1}px)`, // 1441px 이상
    desktop: `@media (min-width: ${breakpoints.desktop + 1}px)`, // 1661px 이상
  },
  between: {
    mobileToTablet: `@media (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet - 1}px)`, // 744px ~ 1023px
    tabletToLaptop: `@media (min-width: ${breakpoints.tablet + 1}px) and (max-width: ${breakpoints.laptop - 1}px)`, // 1025px ~ 1439px
  },
};

export const theme = {
  breakpoints,
  media,
};
