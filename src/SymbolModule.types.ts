import { ViewProps } from "react-native";

export interface SymbolModuleViewProps extends ViewProps {
  name: string;
  type?: SymbolType;
  scale?: SymbolScale;
  weight?: SymbolWeight;
  colors?: string | string[];
  tint?: string;
  resizeMode?: SymbolContentMode;
  animationSpec?: AnimationSpec;
}

export interface NativeSymbolViewProps extends ViewProps {
  name: string;
  type: SymbolType;
  scale?: SymbolScale;
  weight?: SymbolWeight;
  animated: boolean;
  colors?: string | string[];
  tint?: string;
  resizeMode?: SymbolContentMode;
  animationSpec?: AnimationSpec;
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
  effect?: AnimationEffect;
  repeating?: boolean;
  repeatCount?: number;
  speed?: number;
  variableAnimationSpec?: VariableAnimationSpec;
};

export type AnimationEffect = {
  type: AnimationType;
  wholeSymbol?: boolean;
  direction?: "up" | "down";
};

type AnimationType = "bounce" | "pulse" | "scale";

type VariableAnimationSpec = {
  reversing?: boolean;
  cumulative?: boolean;
  iterative?: boolean;
  hideInactiveLayers?: boolean;
  dimInactiveLayers?: boolean;
};

type SymbolType = "monochrome" | "hierarchical" | "palette" | "multicolor";
