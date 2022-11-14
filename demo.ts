//https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md
//Pick
type MyPick<T,K extends keyof T> = {
  [key in K]: T[K]
}

//Readonly

type MyReadonly<T> = {
  readonly [K in keyof T] : T[K]
}

//TupleToObject

type TupleToObject<T extends readonly any[]> = {
  [K in  T[number]] : T[K]
}

type First<T extends any[]> = T extends [infer K ,...infer R] ? K : never;


type Length<T extends readonly any[]> = T['length']

type MyExclude<T,U> = T extends U ? never : T;

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<unknown> ? MyAwaited<U> : U : never;

type Unshift<T extends unknown[],U extends unknown> = [U,...T];


type If<C extends boolean,T extends unknown , F extends unknown> = C extends true ? T : F;

type Concat<T extends unknown[],U extends unknown[]> = [...T,...U];

type MyParameters<T extends Function> = T extends ((...U:infer T) => unknown) ? [...T] : never;

type MyReturnType<T > = T extends ((...A:any[]) => infer U) ? U : never;


const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn>


type MyOmit<T extends Record<string,any>,K extends keyof T> = {
  [P in keyof T as P extends K ? never : P] : T[P]
}

type MyReadonly2<T extends Record<string,any>,K extends keyof T> = {
  readonly [P in keyof T ] : T[P]
} & Omit<T,K>


//keyof T extends never 判断是对象
type DeepReadonly<T extends Record<string,any>> = {
  readonly [K in keyof T] : keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
}


type TupleToUnion<T> = T extends [infer R,...infer Rest] ? R | TupleToUnion<Rest> : never;

type Test = TupleToUnion<[1,2,3]>