// main units
const $units = {
  tiniest: 4,
  tiny: 8,
  small: 16,
  base: 24,
  large: 48,
  x_large: 64,
  xx_large: 88,
  xxx_large: 120,
  full: 100,
};

/* units are: 'tiniest' = 4, 'tiny' = 8, 'small' = 16, 'base' = 24, 'large' = 48,
* 'x_large' = 64, 'xx_large' = 88, 'xxx_large' = 120, 'full' = 100
*  dimensions are: px, %, vh, vw, em...
*  -------------------------------------
* (string, string) => string
* ('small', '%') => '16%'
* */
const $sizing = (unit = 'base', dimension = 'px') => $units[unit] + dimension;

// work with fonts
const $font = {
  size: $sizing,
  weight: {
    thin: '300',
    base: '500',
    bold: '900',
  },
  line_height: '1.6',
};

export { $sizing, $font };
