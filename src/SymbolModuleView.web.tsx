import * as React from 'react';

import { SymbolModuleViewProps } from './SymbolModule.types';

export default function SymbolModuleView(props: SymbolModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
