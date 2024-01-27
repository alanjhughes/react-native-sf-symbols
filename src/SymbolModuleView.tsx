import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SymbolModuleViewProps } from './SymbolModule.types';

const NativeView: React.ComponentType<SymbolModuleViewProps> =
  requireNativeViewManager('SymbolModule');

export default function SymbolModuleView(props: SymbolModuleViewProps) {
  return <NativeView {...props} />;
}
