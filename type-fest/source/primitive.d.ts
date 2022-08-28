/**
Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

@category Basic
*/
export type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;
