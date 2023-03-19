import { isCard } from './Card';
import { isCardSymbol } from './CardSymbol';

const TypeGuards = { isCard, isCardSymbol }

// Export types
export * from './Card'
export * from './CardSymbol';

// Export 'TypeGuards'
export default TypeGuards;
