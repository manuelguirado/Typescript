type isString<T> = T extends string ? 'yes ' : 'no';
type a = isString<string>; // yes
let b: isString<string>; // no
 
