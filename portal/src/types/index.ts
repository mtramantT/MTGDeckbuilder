import { isCard } from './Card';
import { isCardSymbol } from './CardSymbol';
import isObject from './typeguards/isObject';

const TypeGuards = { isCard, isCardSymbol, isObject };

// Export types
export * from './Card';
export * from './CardSymbol';

// Export 'TypeGuards'
export {default as isObject} from './typeguards/isObject';
export default TypeGuards;
