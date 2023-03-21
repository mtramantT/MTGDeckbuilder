// import original module declarations
import 'styled-components';
import { AppTheme } from './theme/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme{}
}