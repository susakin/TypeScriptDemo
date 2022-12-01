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

 /**
  * AppendArgument
  * https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.zh-CN.md
  */
type AppendArgument<Fn extends Function,A> = Fn extends ((...arg:infer R) => infer G ) ? ((...arg:[...R,A]) => G) : never;
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 

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

  /**
   * DropSubStr
   */
  type DropSubstr<Str extends string,SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ?  DropSubstr<`${Prefix}${Suffix}`,SubStr> : Str;


  /**
   * MinusOne
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.zh-CN.md
   */

  type MinusOne<T,S extends unknown[] = []> = [1,...S]['length'] extends T ? S['length'] : MinusOne<T,[1,...S]>;

  /**
   * PickByType 
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md
   */
  type PickByType<T,S> = {
    [K in keyof T as T[K] extends S ? K : never] : T[K]
  }

  /**
   * StartsWith 
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.zh-CN.md
   */
  type StartsWith<T,U extends string> = T extends `${U}${infer R}` ? true : false;

  /**
   * EndsWith
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.zh-CN.md
   */
  type EndsWith<T,U extends string> = T extends `${infer R}${U}` ? true : false;

  type merge<T> = {
    [P in keyof T] : T[P]
  }

  /**
   * PartialByKeys 
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.zh-CN.md
   */
  type PartialByKeys<T,K extends keyof T> = merge<{
    [R in keyof T] : T[R]
  } & {
    [R in keyof T as R extends K ? R : never] ? : T[R]
  }>

  /**
   * RequiredByKeys 
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.zh-CN.md
   */
  type RequiredByKeys<T,K extends keyof T> = merge<{
    [R in keyof T as R extends K ? never :R]  : T[R]
  } &  {
    [R in keyof T as R extends K ? R : never]-? : T[R]
  }>
  // interface User {
  //   name?: string
  //   age?: number
  //   address?: string
  // }
  
  // type UserRequiredName = RequiredByKeys<User, 'name'> 

  /**
   * Mutable 
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.zh-CN.md
   */

  type Mutable<T extends object> = {
    -readonly[P in keyof T] : T[P]
  }

  /**
   * OmitByType
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
   */ 

  type OmitByType<T,U> = {
    [K in keyof T as T[K] extends U ? never : K] : T[K]
  }

  /**
   * ObjectEntries
   * https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
   */
  type ObjectEntries<T,K = keyof T> = K extends keyof T ? [K, T[K]] : never;

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model>

  /**
   * Tuple to Nested Object
   * https://github.com/susakin/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md
   */

  type TupleToNestedObject<T,U> = T extends [infer F extends string,...infer Rest] ? {
    [P in F] : TupleToNestedObject<Rest,U>
  } : U;

  //type b = TupleToNestedObject<['a', 'b'], number> 

  /**
   * Reverse 
   * https://github.com/susakin/type-challenges/blob/main/questions/03192-medium-reverse/README.zh-CN.md
   */
  type Reverse<T> = T extends [infer F,...infer Rest] ? [...Reverse<Rest>,F] : T;


  /**
   * Flip Arguments
   * https://github.com/susakin/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md
   */
  type FlipArguments<T extends Function> = T extends ((...R: infer A) => infer U) ? ((...R:Reverse<A>) => U) : T;
  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 

  /**
   * Flip 
   * https://github.com/susakin/type-challenges/blob/main/questions/04179-medium-flip/README.md
   */
  type Flip<T extends Record<string,any>> = {
    [K in keyof T as T[K] extends boolean ? `${T[K]}` : T[K]] : K
  }

  /**
   *  DeepPromiseValueType
   */

  type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<infer ValueType> ? ValueType extends Promise<unknown> ? DeepPromiseValueType<ValueType> : ValueType : never;

  /**
   * Includes
   */
  type Includes<Arr extends unknown[],FindItem> = Arr extends [infer First,...infer Rest] ? First extends FindItem ? true : Includes<Rest,FindItem> : false;
