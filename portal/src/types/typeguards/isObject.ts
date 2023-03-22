const isObject = <T extends object>(val: any): val is T =>  typeof val === 'object' && typeof val !== 'function' && typeof val !== 'undefined';
export default isObject;