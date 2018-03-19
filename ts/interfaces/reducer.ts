// A reducer is just a binary filter who, unlike the nix generic filter, returns the first type
export default interface Reducer<T, U> {
  (t: T, u: U): T;
}
