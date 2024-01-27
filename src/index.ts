import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SymbolModule.web.ts
// and on native platforms to SymbolModule.ts
import SymbolModule from './SymbolModule';
import SymbolModuleView from './SymbolModuleView';
import { ChangeEventPayload, SymbolModuleViewProps } from './SymbolModule.types';

// Get the native constant value.
export const PI = SymbolModule.PI;

export function hello(): string {
  return SymbolModule.hello();
}

export async function setValueAsync(value: string) {
  return await SymbolModule.setValueAsync(value);
}

const emitter = new EventEmitter(SymbolModule ?? NativeModulesProxy.SymbolModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SymbolModuleView, SymbolModuleViewProps, ChangeEventPayload };
