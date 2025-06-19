interface Object {
	pipe<T, R>(this: T, f: (input: T) => R): R;
}
