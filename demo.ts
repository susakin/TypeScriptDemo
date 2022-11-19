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
 * Length of String
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.zh-CN.md
 */

type LengthOfString<S extends string,A extends string[]=[]> = S extends `${infer F}${infer Rest}` ? LengthOfString<Rest,[...A,F]> : A['length'];


/**
 * Flatten
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.zh-CN.md
 */

type Flatten<T> = T extends [] ? [] : T extends [infer A ,... infer Rest] ? [...Flatten<A> ,...Flatten<Rest>] : [T];
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> 


/**
 * Append to object
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.zh-CN.md
 */

type AppendToObject<T,K extends string,V extends any> = T & {K:V} extends infer F ? {[P in keyof F] : F[P]} : never;


/**
 * Absolute 
 * https://github.com/type-challenges/type-challenges/issues/19167
 */

type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer R}` ? F extends '-' ? R :`${T}`:never;


/**
 * String to Union 
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.zh-CN.md
 */

type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? `${F}` | `${StringToUnion<R>}` : never;

/**
 * Merge 
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.zh-CN.md
 */

type Merge<T,R> = {
  [K in keyof(T & R)]: K extends keyof R ? R[K] : K extends keyof T ? T[K] : never;
};
// type foo = {
//   name: string;
//   age: string;
// }

// type coo = {
//   age: number;
//   sex: string
// }

// type Result = Merge<foo,coo>;

/**
 * KebabCase 
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md
 */

  type KebabCase<S> = S extends `${infer H}${infer T}` ? T extends Uncapitalize<T> ? `${Uncapitalize<H>}${KebabCase<T>}` : `${Uncapitalize<H>}-${KebabCase<T>}` : S;

/**
 * Diff
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.zh-CN.md
 */

  type Diff<T,R> = {
    [K in Exclude<keyof(T & R),keyof(T|R)>] : (T&R)[K]
  }

  /**
   * AnyOf
   * https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.zh-CN.md
   */

  type AnyOf<T> = T extends [infer A,...infer R] ? T extends [] ? false : A extends true ? true :  AnyOf<R> : never;

  /**
   * isNever
   * https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
   */

  type IsNever<T> = [T] extends [never] ? true: false;

  /**
   * IsUnion
   * https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
   */
  type IsUnion<A,B = A> = A extends A ? ([B] extends [A] ? false : true) : false;