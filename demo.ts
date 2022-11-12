
type MyOmit<T extends Record<string,any>,K extends keyof T> = {
  [P in keyof T as P extends K ? never : P] : T[P]
}

type MyReadonly2<T extends Record<string,any>,K extends keyof T> = {
  readonly [P in keyof T ] : T[P]
} & Omit<T,K>


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