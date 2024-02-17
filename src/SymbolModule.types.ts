import { ViewProps } from "react-native";

export interface SymbolModuleViewProps extends ViewProps {
  name: string;
  type?: SymbolType;
  scale?: SymbolScale;
  weight?: SymbolWeight;
  colors?: string | string[];
  resizeMode?: SymbolContentMode;
  animationSpec?: AnimationSpec;
}

export interface NativeSymbolViewProps extends ViewProps {
  name: string;
  type: SymbolType;
  scale?: SymbolScale;
  weight?: SymbolWeight;
  animated: boolean;
  colors?: string[];
  resizeMode?: SymbolContentMode;
}

type SymbolWeight =
  | "unspecified"
  | "ultraLight"
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "heavy"
  | "black";

type SymbolScale = "default" | "unspecified" | "small" | "medium" | "large";

type SymbolContentMode =
  | "scaleToFill"
  | "scaleAspectFit"
  | "scaleAspectFill"
  | "redraw"
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export type AnimationSpec = {
  type: AnimationType;
  repeating?: boolean;
  repeatCount?: number;
  speed?: number;
};

type AnimationType = "variableColor" | "bounce" | "pulse" | "scale";

type SymbolType = "monochrome" | "hierarchical" | "palette" | "multicolor";
