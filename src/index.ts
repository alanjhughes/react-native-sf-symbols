import SymbolModule from "./SymbolModule";
import { SymbolModuleViewProps } from "./SymbolModule.types";
import SymbolModuleView from "./SymbolModuleView";

export function getSymbolNamesAsync(): Promise<string[]> {
  return SymbolModule.getSymbolNamesAsync();
}

export { SymbolModuleView, SymbolModuleViewProps };
