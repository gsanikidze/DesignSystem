import { $theme } from '../../themeProvider';
import { $sizing } from '../../styles/ui_vars.css';

export default ({ style }) => ({
  padding: `${$sizing('tiny', 'px')} ${$sizing('small', 'px')}`,
  backgroundColor: $theme.color.primary,
  border: `1px solid ${$theme.color.primary}`,
  color: $theme.color.white,
  borderRadius: $sizing('x_large', 'px'),
  fontSize: $sizing('small', 'px'),
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  ...style,
});
