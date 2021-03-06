import "styled-components";
import { CSSObject, CSSProp } from "styled-components";
import theme from "./styles/theme";
declare module "styled-components" {
  type Theme = ReturnType<typeof theme>;
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
