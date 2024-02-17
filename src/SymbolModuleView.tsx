import { requireNativeViewManager } from "expo-modules-core";

import {
  NativeSymbolViewProps,
  SymbolModuleViewProps,
} from "./SymbolModule.types";

const NativeView: React.ComponentType<NativeSymbolViewProps> =
  requireNativeViewManager("SymbolModule");

export default function SymbolModuleView(props: SymbolModuleViewProps) {
  const nativeProps = getNativeProps(props);
  return <NativeView {...nativeProps} />;
}

function getNativeProps(props: SymbolModuleViewProps): NativeSymbolViewProps {
  const colors = Array.isArray(props.colors) ? props.colors : [props.colors];
  const animated = !!props.animationSpec ?? false;
  const type = props.type ?? "monochrome";

  return {
    ...props,
    colors,
    animated,
    type,
  };
}
