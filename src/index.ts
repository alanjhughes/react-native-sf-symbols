import SymbolModule from "./SymbolModule";
import { SymbolModuleViewProps, AnimationEffect } from "./SymbolModule.types";
import SymbolView from "./SymbolModuleView";

export function getSymbolNamesAsync(): Promise<string[]> {
  return SymbolModule.getSymbolNamesAsync();
}

export { SymbolView as Symbol, SymbolModuleViewProps, AnimationEffect };
