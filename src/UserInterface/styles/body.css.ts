import { globalFontFace, style } from '@vanilla-extract/css';

const roboto = 'GlobalRoboto';

globalFontFace(roboto, {
  src: 'local("Comic Sans MS")'
});

export const bodyStyle = style({
  backgroundColor: "#afafaf",
  fontFamily: roboto,
  margin: 0
});