//https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md

/**
 * 最后一个元素
 * https://github.com/susakin/type-challenges/blob/main/questions/00015-medium-last/README.zh-CN.md
 */
type Last<T> = T extends [...infer A, infer B] ? B : never;
type tail = Last<['a', 'b', 'c']>


/**
 * 出堆
 * https://github.com/susakin/type-challenges/blob/main/questions/00016-medium-pop/README.zh-CN.md
 */

type Pop<T> =  T extends [...infer A, infer B] ? A : never;
type re1 = Pop<['a', 'b', 'c', 'd']>

/**
 * Promise.all
 * https://github.com/susakin/type-challenges/blob/main/questions/00020-medium-promise-all/README.zh-CN.md
 */

declare function PromiseAll<T extends any[]>(values:readonly[...T]):Promise<{
  [K in keyof T]: T[K] extends Promise<infer A> ? A : T[K];
}>


/**
 * Type Lookup
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
 */

type LookUp<U ,T> = U extends {type : T} ? U : never;


/**
 * Type Trim Left
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.zh-CN.md
 */
type TrimLeft<T> = T extends ` ${infer rest}` ? TrimLeft<rest> : T;
type trimed = TrimLeft<'  Hello World  '>


/**
 * Trim
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.zh-CN.md
 */
type Blank = ' '|'\n' |'\t';
type Trim<T> = T extends `${Blank}${infer R}` | `${infer R}${Blank}` ? Trim<R> : T;
type trimed1 = Trim<'  Hello World  '>

/**
 * Capitalize
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.zh-CN.md
 */

type MCapitalize<T> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T

/**
 * replace
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.zh-CN.md
 */

type Replace<T,F extends string,S extends string> = T extends `${infer A}${F}${infer B}` ? `${A}${S}${B}` : T;


/**
 * ReplaceAll
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.zh-CN.md
 */

 type ReplaceAll<T,F extends string,S extends string> = T extends `${infer A}${F}${infer B}` ? ReplaceAll<`${A}${S}${B}`,F,S> : T;

 type replaced = ReplaceAll<'t y p e s', ' ', ''>