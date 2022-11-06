
type MyOmit<T extends Record<string,any>,K extends keyof T> = {
  [P in keyof T as P extends K ? never : P] : T[P]
}

type MyReadonly2<T extends Record<string,any>,K extends keyof T> = {
  readonly [P in keyof T ] : T[P]
} & Omit<T,K>