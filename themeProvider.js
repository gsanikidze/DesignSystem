import $theme from './styles/theme.css';

function themeProvider(theme) {
  if (theme) {
    $theme = { ...$theme, ...theme };
  }
}

export { themeProvider, $theme };
